import { combineReducers } from 'redux'
import testReducer from './testReducer'
import getUsersReducer from './getUserReducer'
import registerUserReducer from './registerUserReducer'

const allReducers = combineReducers({
    testRedux: testReducer,
    getUsers: getUsersReducer,
    registerUser: registerUserReducer
})

export default allReducers
