import React from 'react'
import { version, author } from '../../../package.json'

import './Footer.scss'

export default class Footer extends React.PureComponent {
  render () {
    return (
      <div className='footer'>
        <p>Version: {version}</p>
        <p>Created by {author.name} on his spare time.</p>
        <p>Source code available at <a href='https://github.com/maretana/earthlock-bestiary'>GitHub</a></p>
      </div>
    )
  }
}
