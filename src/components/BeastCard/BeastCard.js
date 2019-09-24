import React from 'react'

import './BeastCard.scss'

export default class BeastCard extends React.PureComponent {
  render () {
    const { beast } = this.props
    return (
      <div className='beast-card'>
        <img className='beast-card__avatar' src={`images/avatars/${beast.key}.png`} alt={beast.name} />
      </div>
    )
  }
}
