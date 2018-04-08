import React from 'react'
import PropTypes from 'prop-types'

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

function Icon(props) {
  const className = `fa fa-${props.name}`

  return (
    <i className={className}></i>
  )
}

export default Icon
