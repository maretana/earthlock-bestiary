import React from 'react'
import { version } from '../../../package.json'

import './Footer.scss'

export default class Footer extends React.PureComponent {
  render () {
    return (
      <div className='footer'>
        <p>Version: {version}</p>
        <p>Created by Mario Retana on his spare time.</p>
        <p>Source code available at <a href='https://github.com/maretana/earthlock-bestiary'>GitHub</a></p>
      </div>
    )
  }
}
