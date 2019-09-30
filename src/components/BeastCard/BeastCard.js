import React from 'react'

import './BeastCard.scss'

export default class BeastCard extends React.PureComponent {
  state = {
    isActive: false
  }

  handleOnClick = evt => {
    const { setActiveBeast, beast } = this.props
    setActiveBeast(beast)
  }

  handleHover = evt => {
    this.setState(prevState => {
      return {
        isActive: !prevState.isActive
      }
    })
  }

  render () {
    const { beast } = this.props
    let containerClass = 'beast-card'
    if (this.state.isActive) {
      containerClass += ' --active'
    }
    return (
      <div className={containerClass} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <button type='button' className='beast-card__button' onClick={this.handleOnClick}>
          <img className='beast-card__avatar' src={`images/avatars/${beast.key}.png`} alt={beast.name} />
        </button>
      </div>
    )
  }
}
