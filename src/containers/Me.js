import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
} from '../components'

import { meRequest } from '../actions/meActions'

class Me extends React.Component {
  static propTypes = {
    meRequest: PropTypes.func.isRequired
  }

  componentDidMount () {
   // this.props.meRequest()
  }

  render () {
    return (
      <div>
        <h2>Me</h2>
      </div>
    )
  }
}

const mapStateToProps = ({ me }) => {
  return {
    me
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    meRequest: (payload) => {
      return dispatch(meRequest(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me)