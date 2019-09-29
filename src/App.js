import React from 'react'
import bestiary from './data/bestiary.json'
import BeastInfoModal from './components/BeastInfoModal'
import Bestiary from './components/Bestiary'

import './App.scss'

export default class App extends React.PureComponent {
  state = {
    activeBeast: null
  }

  setActiveBeast = activeBeast => {
    this.setState({
      activeBeast
    })
  }

  render () {
    return (
      <div className='App'>
        {this.state.activeBeast && (
          <BeastInfoModal beast={this.state.activeBeast} setActiveBeast={this.setActiveBeast} />
        )}
        <Bestiary bestiary={bestiary} setActiveBeast={this.setActiveBeast} />
      </div>
    )
  }
}
