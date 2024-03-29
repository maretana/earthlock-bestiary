import React from 'react'

function BeastInfoListItem ({ item }) {
  return (
    <li className='beast-info-list-item'>
      <span className='beast-info-text'>{item}</span>
    </li>
  )
}

export default class BeastInfoList extends React.PureComponent {
  render () {
    const { list, modifier, label } = this.props
    const containerClassName = `beast-info-list-container --${modifier}`
    return (
      <div className={containerClassName}>
        <span className='beast-info-label'>{label}</span>
        <ul className='beast-info-list'>
          {list.map(item => {
            return (
              <BeastInfoListItem key={item} item={item} />
            )
          })}
        </ul>
      </div>
    )
  }
}
