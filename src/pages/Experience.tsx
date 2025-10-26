import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()

  return (
    <main>
      <h1>{t('header.nav.experience')}</h1>
    </main>
  )
}

export default Experience
