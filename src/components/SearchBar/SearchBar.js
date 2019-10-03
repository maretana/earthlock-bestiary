import React from 'react'

import './SearchBar.scss'

export default class SearchBar extends React.PureComponent {
  handleUserInput = evt => {
    const { setSearchFilter } = this.props
    setSearchFilter(evt.target.value)
  }

  render () {
    return (
      <div className='search-filter'>
        <input
          className='search-input'
          type='text'
          value={this.props.searchFilter}
          onChange={this.handleUserInput}
          placeholder='Search...'
        />
      </div>
    )
  }
}
