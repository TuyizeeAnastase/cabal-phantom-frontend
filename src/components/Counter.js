import React, { Component } from 'react';
import { increment, decrement } from '../redux/actions/testAction'
import { connect } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import '../Assets/Styles/App.scss'

class Counter extends Component {
    render() {
        return (
            <div className="headers">
                <h1 className="headers__title">Phantom App</h1>
                <div className="headers__title" aria-label="value">{this.props.value}</div>
                <button onClick={() => { this.props.dispatch(increment()) }} aria-label="incr"><AddIcon style={{ fontSize: "40px" }} /></button>
                <button onClick={() => { this.props.dispatch(decrement()) }} aria-label="decr"><RemoveIcon style={{ fontSize: "40px" }} /></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.testRedux.value,
    };
};

export default connect(mapStateToProps)(Counter);
