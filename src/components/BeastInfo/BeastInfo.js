import React from 'react'
import BeastInfoList from './components/BeastInfoList'

import './BeastInfo.scss'

export default class BeastInfo extends React.PureComponent {
  render () {
    const { beast } = this.props
    return (
      <div className='beast-info-wrapper'>
        <p className='beast-info-label --name'>
          {beast.name}
        </p>
        <p className='beast-info-type'>
          <span className='beast-info-label'>Type:</span>
          <span className='beast-info-text'>{beast.type}</span>
        </p>
        <BeastInfoList modifier='strong-against' label='Strong against:' list={beast.strongAgainst} />
        <BeastInfoList modifier='weak-against' label='Weak against:' list={beast.weakAgainst} />
      </div>
    )
  }
}
