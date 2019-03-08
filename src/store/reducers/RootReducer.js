import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './LoginSpinner';
import { userLoading, user } from './User';
import { userMenu } from './UserMenu';
import { activeAnalysis } from './Analyzes';


const RootReducer = combineReducers({
    notificationCss,
    notificationText,

    loginSpinner,

    userLoading,
    user,

    userMenu,

    activeAnalysis,
});

export default RootReducer;