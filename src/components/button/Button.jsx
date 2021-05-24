import classnames from 'classnames'

import './button.scss'

export const BUTTON_TYPES = {
  primary: 'primary',
  secondary: 'secondary'
}

const Button = ({ id, text, type, onClick, className }) => {
  const classNames = classnames('base-button', type, className)

  return <button id={id} className={classNames} onClick={onClick}>
    {text}
  </button>
}

export default Button