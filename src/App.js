import React from 'react'
import bestiary from './data/bestiary.json'
import BeastCard from './components/BeastCard'
import BeastInfoModal from './components/BeastInfoModal'

import './App.scss'

export default class App extends React.PureComponent {
  state = {
    modalBeast: null
  }

  setModalBeast = modalBeast => {
    this.setState({
      modalBeast
    })
  }

  render () {
    return (
      <div className='App'>
        {this.state.modalBeast && (
          <BeastInfoModal beast={this.state.modalBeast} setModalBeast={this.setModalBeast} />
        )}
        <ol className='bestiary'>
          {bestiary.map(beast => {
            return (
              <li className='bestiary-item' key={beast.key}>
                <BeastCard beast={beast} setModalBeast={this.setModalBeast} />
              </li>)
          })}
        </ol>
      </div>
    )
  }
}
