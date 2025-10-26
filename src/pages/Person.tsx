import { useTranslation } from 'react-i18next'

const Person = () => {
  const { t } = useTranslation()

  return (
    <main>
      <h1>{t('header.nav.person')}</h1>
    </main>
  )
}

export default Person
