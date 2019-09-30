import React from 'react'
import BeastInfo from '../BeastInfo'

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
          <img className='beast-info-modal-image' src={`images/avatars/${beast.key}.png`} alt={beast.name} />
          <BeastInfo beast={beast} />
        </div>
      </div>
    )
  }
}
