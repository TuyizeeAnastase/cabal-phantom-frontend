import React from 'react'
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import logoutReducer from '../redux/reducers/logoutReducer';
import { logoutAction, logoutRequest, logoutSuccess, logoutError } from '../redux/actions/logoutAction';
import Logout from '../components/Logout';
import { Provider } from 'react-redux'
import store from '../redux/store'
import userEvent from '@testing-library/user-event'
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../redux/types/logoutTypes'


// logoutError

const AppComponent = () => {
    return render(
        <Provider store={store}>
            <Logout />
        </Provider>
    )
}

describe('Test Logout', ()=>{
    it('Capturing Snapshot of Logout', () => {
        const renderedValue = AppComponent()
        expect(renderedValue).toMatchSnapshot();
    });

    it('should test action', ()=>{
        expect(logoutRequest()).toHaveProperty('type')
    })

    it('should test action', ()=>{
        const data = {
            message: "test logout"
        }
        expect(logoutSuccess(data)).toHaveProperty('payload')
    })

    it('should test action', ()=>{
        const error = {
            message: "test failed"
        }
        expect(logoutError(error)).toHaveProperty('payload')
    })
})
