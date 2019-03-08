import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './LoginSpinner';
import { userLoading, user } from './User';
import { userMenu } from './UserMenu';


const RootReducer = combineReducers({
    notificationCss,
    notificationText,

    loginSpinner,

    userLoading,
    user,

    userMenu,
});

export default RootReducer;