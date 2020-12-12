import React from 'react'
import LocaleContext from 'common/contexts/LocaleContext'

export const useLocale = () => {
  const { locale, setLocale } = React.useContext(LocaleContext)
  return { locale, setLocale }
}

export default useLocale
