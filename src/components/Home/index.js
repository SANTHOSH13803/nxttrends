import {Component} from 'react'
import './index.css'

import Header from '../Header'

import HomeVideoSection from '../Videos'

// import TrendingSection from '../TrendingSection'
import FilterSection from '../FilterSection'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="result-container">
          <FilterSection activeTab="Home" />
          <div
            className="display-according-section"
            //   isDark={isDarkMode}
          >
            <HomeVideoSection />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
