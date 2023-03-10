import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'
// import HomeVideoSection from './components/Videos'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ThemeContext from './Context/context'
import {ChangeTheme} from './components/StyledComponents/styledComponents'
import videoPlayDetails from './components/VideoItemDetails'
import TrendingSection from './components/TrendingSection'
import GamingSection from './components/Gaming'
import SavedVideos from './components/SavedVideos'
// Replace your code here
class App extends Component {
  state = {isDarkMode: false, cartList: []}

  changeDarkMode = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  onAddCartItems = product => {
    const {cartList} = this.state
    const itemAlreadyPresent = cartList.find(each => each.id === product.id)
    if (itemAlreadyPresent === undefined) {
      const updateCart = [...cartList, product]
      this.setState({cartList: updateCart})
    }
  }

  render() {
    const {isDarkMode, cartList} = this.state
    return (
      <ChangeTheme isDark={isDarkMode}>
        <ThemeContext.Provider
          value={{
            isDarkMode,
            cartList,
            addCartItems: this.onAddCartItems,
            toggleTheme: this.changeDarkMode,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/trending"
              component={TrendingSection}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/gaming" component={GamingSection} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={videoPlayDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeContext.Provider>
      </ChangeTheme>
    )
  }
}

export default App
