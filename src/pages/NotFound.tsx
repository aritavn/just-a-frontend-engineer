import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <main>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.message')}</p>
      <p>
        <Link to="/">{t('notFound.homeLink')}</Link>
      </p>
    </main>
  )
}

export default NotFound
