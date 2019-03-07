import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './LoginSpinner';
import { userLoading, user } from './User';


const RootReducer = combineReducers({
    notificationCss,
    notificationText,

    loginSpinner,

    userLoading,
    user,
});

export default RootReducer;