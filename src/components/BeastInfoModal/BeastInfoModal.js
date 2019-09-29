import React from 'react'
import BeastInfoList from './components/BeastInfoList'

import './BeastInfoModal.scss'

export default class BeastInfoModal extends React.PureComponent {
  componentDidMount () {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount () {
    document.body.style.overflow = ''
  }

  handleCloseModalAction = evt => {
    if (evt.target.id === 'beastInfoModal') {
      evt.preventDefault()
      const { setActiveBeast } = this.props
      setActiveBeast(null)
    }
  }

  render () {
    const { beast } = this.props
    return (
      <div id='beastInfoModal' className='beast-info-modal-container' onClick={this.handleCloseModalAction}>
        <div className='beast-info-modal-content'>
          <img className='beast-info-image' src={`images/avatars/${beast.key}.png`} alt={beast.name} />
          <div className='beast-info-text-wrapper'>
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
        </div>
      </div>
    )
  }
}
