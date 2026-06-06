import { useTranslation } from 'react-i18next';
import './SectionHeader.css';

type SectionHeaderProps = {
  sectionHighlightText?: string;
  sectionLabelText: string;
  sectionTitleText: string;
};

const SectionHeader = ({
  sectionHighlightText = '',
  sectionLabelText,
  sectionTitleText,
}: SectionHeaderProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="section-highlight desktop-only"
        aria-hidden="true"
      >
        {sectionHighlightText}
      </div>
      <div className="section-header">
        <div
          className="section-label"
          aria-label={t('pages.common.section') + ' ' + sectionLabelText}
        >
          <span aria-hidden="true">/</span>
          <span aria-hidden="true">/</span> {sectionLabelText}
        </div>
        <h1 className="section-title">{sectionTitleText}</h1>
      </div>
    </>
  );
};

export default SectionHeader;
