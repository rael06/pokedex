import React from 'react'
import useLocaleStorage from 'common/hooks/useLocalStorage'

export default React.createContext(() => {
  const [locale, setLocale] = useLocaleStorage('locale', 'fr')
  return { locale, setLocale }
})
