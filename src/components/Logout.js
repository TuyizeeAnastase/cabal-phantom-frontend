import React, { Component } from 'react';
import { connect } from "react-redux"
import {logout} from '../redux/actions/logoutAction'

 class Logout extends Component {


    render() {
        return (
            <div>
                <button onClick={()=>this.props.dispatch(logout())}>LOGOUT</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      logoutState: state.logout,
    };
  };
  
  
  export default connect(mapStateToProps)(Logout);
  
