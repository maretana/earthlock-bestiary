import React from 'react'

import './BeastCard.scss'

export default class BeastCard extends React.PureComponent {
  render () {
    const { beast } = this.props
    return (
      <div className='beast-card'>
        <button type='button' className='beast-card__button'>
          <img className='beast-card__avatar' src={`images/avatars/${beast.key}.png`} alt={beast.name} />
        </button>
      </div>
    )
  }
}
