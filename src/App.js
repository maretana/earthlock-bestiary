import React from 'react'
import bestiary from './data/bestiary.json'
import BeastInfoModal from './components/BeastInfoModal'
import BeastInfo from './components/BeastInfo'
import Bestiary from './components/Bestiary'

import './App.scss'

/**
 * Minimum width to show the bestiary with the description side by side.
 */
const MIN_FULL_DESKTOP_WIDTH = 1090

export default class App extends React.PureComponent {
  state = {
    activeBeast: null
  }

  setActiveBeast = activeBeast => {
    this.setState({
      activeBeast
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
    return (
      <div className='App'>
        {needsModal && this.state.activeBeast && (
          <BeastInfoModal beast={this.state.activeBeast} setActiveBeast={this.setActiveBeast} />
        )}
        <Bestiary bestiary={bestiary} setActiveBeast={this.setActiveBeast} activeBeastKey={activeBeastKey} />
        {!needsModal && this.state.activeBeast && (
          <div className='beast-info-desktop-container'>
            <BeastInfo beast={this.state.activeBeast} />
          </div>
        )}
      </div>
    )
  }
}
