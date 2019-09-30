import React from 'react'

import './BeastCard.scss'

export default class BeastCard extends React.PureComponent {
  handleBeastSelection = evt => {
    const { setActiveBeast, beast } = this.props
    setActiveBeast(beast)
  }

  render () {
    const { beast } = this.props
    return (
      <div className='beast-card' onMouseEnter={this.handleBeastSelection}>
        <button
          type='button'
          className='beast-card__button'
          // onFocus is used for accessibility so users can navigate using the TAB button.
          onFocus={this.handleBeastSelection}
          onClick={this.handleBeastSelection}
        >
          <img className='beast-card__avatar' src={`images/avatars/${beast.key}.png`} alt={beast.name} />
        </button>
      </div>
    )
  }
}
