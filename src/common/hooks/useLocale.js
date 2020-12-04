import React from "react"
import LocaleContext from "../contexts/LocaleContext";

export const useLocale = () => {
  const {locale} = React.useContext(LocaleContext)
  return locale
}

export default useLocale