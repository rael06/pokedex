import React from 'react'
import styles from './style.module.css'
import PokemonListPage from 'Page1/PokemonListPage'
import Header from 'common/components/Header'
import LocaleContext from 'common/contexts/LocaleContext'
import useLocaleStorage from 'common/hooks/useLocalStorage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PokemonDetails from './Page2/PokemonDetails/index'

export default function App() {
  const [locale, setLocale] = useLocaleStorage('locale', 'fr')

  const localeContextValue = {
    locale,
    setLocale,
  }

  const changeLocale = (newLocale) => {
    setLocale(newLocale)
  }

  return (
    <BrowserRouter>
      <LocaleContext.Provider value={localeContextValue}>
        <div className={styles.wrapper}>
          <div className={styles.subWrapper}>
            <Header changeLocale={changeLocale} />
          </div>

          <div className={styles.subWrapper}>
            <Switch>
              <Route path={'/'} exact>
                <PokemonListPage />
              </Route>
              <Route path="/pokemon/:id" exact>
                <PokemonDetails />
              </Route>
              <div>404</div>
            </Switch>
          </div>
        </div>
      </LocaleContext.Provider>
    </BrowserRouter>
  )
}
