import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';


const RootReducer = combineReducers({
    notificationCss,
    notificationText
});

export default RootReducer;