import React from 'react'
import styles from './style.module.css'
import PokemonListPage from 'PokemonListPage'
import Header from 'common/components/Header'
import LocaleContext from 'common/contexts/LocaleContext'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PokemonDetails from './PokemonListPage/PokemonDetails/index'
import useLocaleStorage from 'common/hooks/useLocalStorage'
import NotFound from 'common/components/NotFound'

export default function App() {
  const [locale, setLocale] = useLocaleStorage('locale', 'fr')

  return (
    <BrowserRouter>
      <LocaleContext.Provider
        value={{
          locale,
          setLocale,
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.subWrapper}>
            <Header />
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
              <NotFound />
            </Switch>
          </div>
        </div>
      </LocaleContext.Provider>
    </BrowserRouter>
  )
}
