import React from 'react'
import styles from './style.module.css'
import PokemonListPage from 'Page1/PokemonListPage'
import Header from 'common/components/Header'
import LocaleContext from 'common/contexts/LocaleContext'
import useLocaleStorage from 'common/hooks/useLocalStorage'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PokemonDetails from './Page2/PokemonDetails/index'
import PureLink from 'common/components/PureLink'
import { getLocaleName, translations } from 'common/utils/locale'

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
              <Route path={'/pokemons'} exact>
                <PokemonListPage />
              </Route>
              <Route path="/pokemons/:id" exact>
                <PokemonDetails />
              </Route>
              <Route path={'/'} exact>
                <Redirect to="/pokemons" />
              </Route>
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '40px',
                  color: 'white',
                  marginLeft: '30px',
                }}
              >
                404...
                <PureLink to="/pokemons">
                  <button>{getLocaleName(translations['goBack'], locale)}</button>
                </PureLink>
              </div>
            </Switch>
          </div>
        </div>
      </LocaleContext.Provider>
    </BrowserRouter>
  )
}
