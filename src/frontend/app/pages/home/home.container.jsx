import {connect} from 'react-redux'
import react, {Component} from 'react'
import {bindActionCreators} from 'redux'

import * as homeActions from './home.actions'

class HomeContainer extends Component {
  static path = '/'

  render() {
    return(
      <div className="home-container">
        Home page container
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ app: state.app })
const mapDispatchToProps = (dispatch) => ({
  homeActions: bindActionCreators(homeActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)