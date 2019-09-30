import React from 'react'
import BeastCard from '../BeastCard'

import './Bestiary.scss'

export default class Bestiary extends React.PureComponent {
  render () {
    const { bestiary, setActiveBeast, activeBeastKey } = this.props
    return (
      <div className='bestiary-wrapper'>
        <ol className='bestiary'>
          {bestiary.map(beast => {
            return (
              <li className='bestiary-item' key={beast.key}>
                <BeastCard
                  beast={beast}
                  setActiveBeast={setActiveBeast}
                  isActive={beast.key === activeBeastKey}
                />
              </li>)
          })}
        </ol>
      </div>
    )
  }
}
