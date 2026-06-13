import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { galleryCards } from '../../data/person';
import './PhotoSlider.css';

const PhotoSlider = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const prefersReduced = globalThis.matchMedia?.(
    '(prefers-reduced-motion: reduce)'
  )?.matches;
  const intervalRef = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const liveRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const pointerState = useRef({ active: false, startX: 0, delta: 0 });
  const total = galleryCards.length;

  function go(i: number): void {
    setIndex((i + total) % total);
  }

  function next(): void {
    go(index + 1);
  }

  function prev(): void {
    go(index - 1);
  }

  useEffect(() => {
    if (prefersReduced || !playing) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index, prefersReduced, playing]);

  // reset progress bar each index change
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    if (!playing || prefersReduced) {
      bar.style.transition = 'none';
      bar.style.width = '0%';
      return;
    }
    bar.style.transition = 'none';
    bar.style.width = '0%';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = 'width 5s linear';
        bar.style.width = '100%';
      });
    });
  }, [index, playing, prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;

    if (liveRef.current) {
      liveRef.current.textContent = t(
        'pages.person.photoSlider.ariaLiveMessage',
        {
          current: index + 1,
          total,
          caption: galleryCards[index].caption,
        }
      );
    }
  }, [index, prefersReduced, total, t]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(document.activeElement)) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [index]);

  function togglePlay(): void {
    setPlaying((p) => !p);
  }

  function onDotClick(i: number): void {
    go(i);
  }

  function pause(): void {
    setPlaying(false);
  }

  function resume(): void {
    if (prefersReduced) return;
    setPlaying(true);
  }

  // Pointer swipe support
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>): void {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pointerState.current = { active: true, startX: e.clientX, delta: 0 };
    pause();
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>): void {
    if (!pointerState.current.active) return;
    pointerState.current.delta = e.clientX - pointerState.current.startX;
  }

  function onPointerUp(): void {
    if (!pointerState.current.active) return;
    const { delta } = pointerState.current;
    const threshold = 60;
    if (delta > threshold) {
      prev();
    } else if (delta < -threshold) {
      next();
    }
    pointerState.current.active = false;
    resume();
  }

  // Touch fallback (some mobile browsers may not fire pointer events reliably)
  function onTouchStart(e: React.TouchEvent<HTMLDivElement>): void {
    if (e.touches.length !== 1) return;
    const x = e.touches[0].clientX;
    pointerState.current = { active: true, startX: x, delta: 0 };
    pause();
  }

  function onTouchMove(e: React.TouchEvent<HTMLDivElement>): void {
    if (!pointerState.current.active || e.touches.length !== 1) return;
    const x = e.touches[0].clientX;
    pointerState.current.delta = x - pointerState.current.startX;
  }

  function onTouchEnd(): void {
    onPointerUp();
  }

  return (
    <section
      className="photo-slider"
      aria-label={t('pages.person.photoSlider.sectionAriaLabel')}
    >
      <div
        className="photo-slider-container"
        ref={wrapperRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <section
          className="slider-wrapper"
          onMouseEnter={pause}
          onMouseLeave={resume}
          aria-roledescription="carousel"
          aria-label={t('pages.person.photoSlider.carouselAriaLabel')}
        >
          {galleryCards.map((c, i) => (
            <div
              key={c.image}
              className={`photo-slide ${i === index ? 'active' : 'inactive'}`}
              aria-hidden={i === index ? 'false' : 'true'}
            >
              <figure className="slide-image">
                <img
                  src={c.image}
                  alt={c.caption}
                  loading="lazy"
                />
                <figcaption className="slide-caption-overlay">
                  <p className="caption-text">{c.caption}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </section>

        <div className="slider-controls">
          <button
            className="slider-btn"
            aria-label={t('pages.person.photoSlider.previousSlide')}
            onClick={prev}
            onFocus={pause}
            onBlur={resume}
          >
            ‹
          </button>

          <div
            className="slider-dots"
            role="tablist"
            aria-label={t('pages.person.photoSlider.slideDotsAriaLabel')}
          >
            {(() => {
              const isNarrow =
                typeof globalThis !== 'undefined' &&
                globalThis.window?.innerWidth < 600;
              const dots = [];

              if (!isNarrow) {
                for (let i = 0; i < total; i++) {
                  dots.push(
                    <button
                      key={'dot-' + i}
                      className={`dot ${i === index ? 'active' : ''}`}
                      aria-label={t('pages.person.photoSlider.goToSlide', {
                        slide: i + 1,
                      })}
                      aria-selected={i === index}
                      role="tab"
                      onClick={() => onDotClick(i)}
                    />
                  );
                }
                return dots;
              }

              const shown = new Set([0, total - 1, index]);
              if (index - 1 >= 0) shown.add(index - 1);
              if (index + 1 < total) shown.add(index + 1);
              const ordered = Array.from(shown).sort((a, b) => a - b);
              let prevVal = null;

              for (const i of ordered) {
                if (prevVal !== null && i - prevVal > 1) {
                  dots.push(
                    <div
                      key={'ellipsis-' + prevVal}
                      className="dot-ellipsis"
                      aria-hidden="true"
                    >
                      …
                    </div>
                  );
                }

                dots.push(
                  <button
                    key={'dot-' + i}
                    className={`dot ${i === index ? 'active' : ''}`}
                    aria-label={t('pages.person.photoSlider.goToSlide', {
                      slide: i + 1,
                    })}
                    aria-selected={i === index}
                    role="tab"
                    onClick={() => onDotClick(i)}
                  />
                );
                prevVal = i;
              }
              return dots;
            })()}
          </div>

          <button
            className="slider-btn"
            aria-label={t('pages.person.photoSlider.nextSlide')}
            onClick={next}
            onFocus={pause}
            onBlur={resume}
          >
            ›
          </button>

          <button
            className="slider-btn play-toggle"
            aria-label={
              playing
                ? t('pages.person.photoSlider.pauseAutoplay')
                : t('pages.person.photoSlider.resumeAutoplay')
            }
            onClick={togglePlay}
          >
            {playing ? '❚❚' : '►'}
          </button>
        </div>

        {!prefersReduced && (
          <div
            className="auto-play-indicator"
            aria-hidden="true"
          >
            <div
              className="progress-bar"
              ref={progressRef}
            ></div>
          </div>
        )}

        <div
          className="visually-hidden"
          aria-live="polite"
          ref={liveRef}
        ></div>
      </div>
    </section>
  );
};

export default PhotoSlider;

