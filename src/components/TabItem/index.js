import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTabItem} = props
  const {tabId, displayText} = tabDetails
  const buttonClassName = isActive ? 'active-btn' : ''
  const buttonName = `button-btn ${buttonClassName}`

  const updateTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li>
      <button type="button" onClick={updateTab} className={buttonName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
