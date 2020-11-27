import React from 'react'
import styles from './style.module.css'
import LocaleContext from 'common/contexts/LocaleContext'

export default function LanguageSelection() {
  const { locale, setLocale } = React.useContext(LocaleContext)

  const handleChange = (event) => {
    setLocale(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor="languages-select"></label>
      <select onChange={handleChange} value={locale} name="languages" id="languages-select">
        <option value="zh-Hans">zh-Hans</option>
        <option value="ja">ja</option>
        <option value="en">en</option>
        <option value="it">it</option>
        <option value="es">es</option>
        <option value="de">de</option>
        <option value="fr">fr</option>
        <option value="zh">zh</option>
        <option value="ko">ko</option>
        <option value="roomaji">roomaji</option>
        <option value="ja-Hrkt">ja-Hrkt</option>
      </select>
    </div>
  )
}
