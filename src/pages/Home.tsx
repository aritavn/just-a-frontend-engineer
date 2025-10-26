import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <main>
      <h1>{t('header.title')}</h1>
    </main>
  )
}

export default Home
