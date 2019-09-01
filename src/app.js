import React, { useContext } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './componets/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './componets/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  console.log({ isAuth })
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </div>
  )
}
