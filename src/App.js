import React from 'react'
import bestiary from './data/bestiary.json'
import BeastCard from './components/BeastCard'

import './App.scss'

function App () {
  return (
    <div className='App'>
      <ol className='bestiary'>
        {bestiary.map(beast => {
          return (
            <li className='bestiary-item' key={beast.key}>
              <BeastCard beast={beast} />
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default App
