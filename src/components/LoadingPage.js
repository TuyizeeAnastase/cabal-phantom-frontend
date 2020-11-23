import React, { Component } from 'react';
import { increment, decrement } from '../redux/actions/testAction'
import { connect } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import '../assets/style/App.scss';

class LoadingPage extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">Phantom App</div>

                <div className="header__title">Value: {this.props.value}</div>
                <button onClick={this.props.increment}><AddIcon style={{ fontSize: "40px" }} /></button>
                <button onClick={this.props.decrement}><RemoveIcon style={{ fontSize: "40px" }} /></button>

                <div className="loading">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.testRedux.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);
