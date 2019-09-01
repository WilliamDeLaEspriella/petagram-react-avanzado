import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './componets/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './componets/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import Context from './Context'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('details')
  // console.log(detailId)
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {/* <NotRegisteredUser path='/favs' />
        <NotRegisteredUser path='/user' />
        <Favs path='/favs' />
        <User path='/user' /> */}
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              ) : (
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
              )
        }
      </Context.Consumer>
      <NavBar />

    </div>
  )
}
