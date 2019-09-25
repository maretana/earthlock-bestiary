import React from 'react'

import './BeastCard.scss'

export default class BeastCard extends React.PureComponent {
  handleOnClick = evt => {
    const { setModalBeast, beast } = this.props
    setModalBeast(beast)
  }

  render () {
    const { beast } = this.props
    return (
      <div className='beast-card'>
        <button type='button' className='beast-card__button' onClick={this.handleOnClick}>
          <img className='beast-card__avatar' src={`images/avatars/${beast.key}.png`} alt={beast.name} />
        </button>
      </div>
    )
  }
}
