import React from 'react'
import PropTypes from 'prop-types'
import './card.scss'

const Card = props => {
  return <div className={`card ${props.className}`}>
    <div className='content'>
      {props.children}
    </div>
  </div>
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Card
