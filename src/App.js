import React from 'react'
import bestiary from './data/bestiary.json'
import BeastInfoModal from './components/BeastInfoModal'
import BeastInfo from './components/BeastInfo'
import Bestiary from './components/Bestiary'

import './App.scss'
import SearchBar from './components/SearchBar/SearchBar.js'

/**
 * Minimum width to show the bestiary with the description side by side.
 */
const MIN_FULL_DESKTOP_WIDTH = 1090

export default class App extends React.PureComponent {
  state = {
    activeBeast: null,
    searchFilter: ''
  }

  setActiveBeast = activeBeast => {
    this.setState({
      activeBeast
    })
  }

  setSearchFilter = newFilter => {
    this.setState({
      searchFilter: newFilter
    })
  }

  componentDidMount () {
    if (window.innerWidth >= MIN_FULL_DESKTOP_WIDTH) {
      this.setState({
        activeBeast: bestiary[0]
      })
    }
  }

  render () {
    const needsModal = window.innerWidth < MIN_FULL_DESKTOP_WIDTH
    const activeBeastKey = this.state.activeBeast && this.state.activeBeast.key
    const filteredBestiary = bestiary.filter(beast => {
      return beast.name.toLowerCase().includes(this.state.searchFilter.toLowerCase())
    })
    return (
      <div className='App'>
        {needsModal && this.state.activeBeast && (
          <BeastInfoModal beast={this.state.activeBeast} setActiveBeast={this.setActiveBeast} />
        )}

        <SearchBar searchFilter={this.state.searchFilter} setSearchFilter={this.setSearchFilter} />

        <Bestiary
          bestiary={filteredBestiary}
          setActiveBeast={this.setActiveBeast}
          activeBeastKey={activeBeastKey}
        />

        {!needsModal && this.state.activeBeast && (
          <div className='beast-info-desktop-container'>
            <BeastInfo beast={this.state.activeBeast} />
          </div>
        )}
      </div>
    )
  }
}
