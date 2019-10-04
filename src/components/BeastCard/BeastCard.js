import React from 'react'

import './BeastCard.scss'

/**
 * Minimum width to show the bestiary with the description side by side.
 */
const MIN_FULL_DESKTOP_WIDTH = 1090

export default class BeastCard extends React.PureComponent {
  handleBeastSelection = evt => {
    const { setActiveBeast, beast } = this.props
    setActiveBeast(beast)
  }

  handleHover = evt => {
    if (window.innerWidth >= MIN_FULL_DESKTOP_WIDTH) {
      this.handleBeastSelection(evt)
    }
  }

  render () {
    const { beast, isActive } = this.props
    let wrapperClassName = 'beast-card'
    if (isActive) {
      wrapperClassName += ' --active'
    }
    return (
      <div className={wrapperClassName} onMouseEnter={this.handleHover}>
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
