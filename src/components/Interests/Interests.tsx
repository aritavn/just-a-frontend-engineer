import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { interests, quickFacts, type QuickFact } from '../../data/person';
import './Interests.css';

const Interests = () => {
  const { t } = useTranslation();

  const duolingoStart = useMemo<Date>(
    () => new Date('2025-09-01T00:00:00Z'),
    []
  );
  const today: Date = new Date();

  const duolingoStreakDays: number = Math.floor(
    (Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()) -
      Date.UTC(
        duolingoStart.getUTCFullYear(),
        duolingoStart.getUTCMonth(),
        duolingoStart.getUTCDate()
      )) /
      (1000 * 60 * 60 * 24)
  );

  const enrichedFacts = useMemo<QuickFact[]>(() => {
    return quickFacts.map((f: QuickFact) =>
      f.text === '__DUOLINGO_STREAK__'
        ? {
            ...f,
            text: `Duolingo streak: ${duolingoStreakDays} day${duolingoStreakDays === 1 ? '' : 's'}`,
          }
        : f
    );
  }, [duolingoStreakDays]);

  return (
    <div className="personality-content">
      <div className="personality-split">
        <div className="personality-left">
          <div className="personality-intro">
            <span className="intro-accent">{'</>'}</span>
            <p>{t('pages.person.introParagraph')}</p>
          </div>

          <div
            className="quick-facts inline"
            aria-label={t('pages.person.personalFactsAriaLabel')}
          >
            {enrichedFacts.map((f) => (
              <div
                key={f.text}
                className="fact-chip"
              >
                <span
                  className="chip-icon"
                  aria-hidden="true"
                >
                  {f.icon}
                </span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="personality-right"
          aria-hidden="false"
        >
          <div
            className="interests-cluster"
            aria-label={t('pages.person.interestBubblesAriaLabel')}
          >
            {interests.map((b) => (
              <div
                key={b.label}
                className={`interest-bubble ${b.size}`}
              >
                <div
                  className="bubble-content"
                  aria-label={b.label}
                >
                  <span
                    className="bubble-icon"
                    aria-hidden="true"
                  >
                    {b.icon}
                  </span>
                  <span className="bubble-text">{b.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
