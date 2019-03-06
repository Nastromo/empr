import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './LoginSpinner';


const RootReducer = combineReducers({
    notificationCss,
    notificationText,

    loginSpinner
});

export default RootReducer;