import { combineReducers } from 'redux'
import testReducer from './testReducer'
import logoutReducer from './logoutReducer'

const allReducers = combineReducers({
    testRedux: testReducer,
    logout: logoutReducer
})

export default allReducers
