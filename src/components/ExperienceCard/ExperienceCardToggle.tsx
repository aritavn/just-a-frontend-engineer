import { useTranslation } from 'react-i18next';

type Props = {
  panelId: string;
  btnId: string;
  isOpen: boolean;
  title: string;
  onToggle: () => void;
};

const ExperienceCardToggle = ({
  panelId,
  btnId,
  isOpen,
  title,
  onToggle,
}: Props) => {
  const { t } = useTranslation();

  return (
    <button
      id={`${btnId}-toggle`}
      className="exp-toggle exp-toggle-glass"
      type="button"
      aria-controls={panelId}
      aria-expanded={isOpen}
      aria-label={t('pages.experience.experienceCard.toggleAriaLabel', {
        action: isOpen
          ? t('pages.experience.experienceCard.toggleAction.hide')
          : t('pages.experience.experienceCard.toggleAction.show'),
        title,
      })}
      onClick={onToggle}
      style={{
        background: 'transparent',
        border: 'none',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'none',
        transition: 'none',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        padding: 0,
      }}
    >
      <span
        aria-hidden="true"
        title={
          isOpen
            ? t('pages.experience.experienceCard.toggleTitle.hide')
            : t('pages.experience.experienceCard.toggleTitle.show')
        }
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          transition: 'transform 0.3s',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="var(--accent)"
            strokeWidth="2.5"
            fill="none"
          />
          <rect
            x="8"
            y="15"
            width="16"
            height="3"
            rx="1.5"
            fill="white"
            style={{ transition: 'all 0.3s' }}
          />
          <rect
            x="15"
            y="8"
            width="3"
            height="16"
            rx="1.5"
            fill="white"
            style={{
              transition: 'all 0.3s',
              opacity: isOpen ? 0 : 1,
            }}
          />
        </svg>
      </span>
    </button>
  );
};

export default ExperienceCardToggle;
