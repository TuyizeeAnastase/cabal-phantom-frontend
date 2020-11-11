import {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR} from '../types/logoutTypes'
import axios from 'axios'

export const logout = () => async(dispatch) => {
    try {
        dispatch(logoutRequest());
        // console.log('Request')
        const res = await axios.get('http://localhost:5000/api/v1/auth/logout')
        localStorage.removeItem('token')
        localStorage.clear()
        dispatch(logoutSuccess(res))
        console.log('Response', res)

    } catch (error) {
        console.log(error)
        dispatch(logoutError(error))
    }    
};
    
export const logoutRequest = () =>{
    return { type: LOGOUT_REQUEST }
}  

export const logoutSuccess = (data) =>{
    return { 
        type: LOGOUT_SUCCESS,
        payload: data
    }
}  

export const logoutError = (error) =>{
    return { 
        type: LOGOUT_ERROR,
        payload: error
    }
}  
