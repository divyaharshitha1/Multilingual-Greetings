import './index.css'

const ButtonsList = props => {
  const {buttonDetails, isActive, setChangeButtonId} = props
  const {id, buttonText} = buttonDetails
  const buttonClassName = isActive ? `button active` : `button`

  const onClickButton = () => {
    setChangeButtonId(id)
  }

  return (
    <li className="button-item">
      <button className={buttonClassName} type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonsList
