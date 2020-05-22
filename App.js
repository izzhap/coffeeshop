import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginPage from './src/page/LoginPage'
import LandingPage from './src/page/LandingPage'
import MenuPage from './src/page/MenuPage'
import HomePage from './src/page/HomePage'
import { setNavigator } from './src/navigationRef'
import { Provider as LoginProvider } from './src/contexts/LoginContext'

const switchNavigator = createSwitchNavigator({
  Landing: LandingPage,
  Login: LoginPage,
  Home: HomePage,
  Menu: MenuPage
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <LoginProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }} />
    </LoginProvider>
  )
}