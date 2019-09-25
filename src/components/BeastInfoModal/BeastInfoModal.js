import React from 'react'

import './BeastInfoModal.scss'

export default class BeastInfoModal extends React.PureComponent {
  componentDidMount () {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount () {
    document.body.style.overflow = ''
  }

  handleCloseModalAction = evt => {
    const { setModalBeast } = this.props
    setModalBeast(null)
  }

  render () {
    const { beast } = this.props
    return (
      <div className='beast-info-modal-container' onClick={this.handleCloseModalAction}>
        <div className='beast-info-modal-content'>
          <img className='beast-info-image' src={`images/avatars/${beast.key}.png`} alt={beast.name} />
          <p className='beast-info-name'>
            <span className='beast-info-label'>Name:</span>
            {beast.name}
          </p>
          <p className='beast-info-type'>
            <span className='beast-info-label'>Type:</span>
            {beast.type}
          </p>
          <div className='beast-info-strong-against'>
            <span className='beast-info-label'>Strong against:</span>
            <ul className='beast-info-list'>
              {beast.strongAgainst.map(item => {
                return (
                  <li key={item} className='beast-info-list-item'>
                    {item}
                  </li>)
              })}
            </ul>
          </div>
          <div className='beast-info-weak-against'>
            <span className='beast-info-label'>Weak against:</span>
            <ul className='beast-info-list'>
              {beast.weakAgainst.map(item => {
                return (
                  <li key={item} className='beast-info-list-item'>
                    {item}
                  </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
