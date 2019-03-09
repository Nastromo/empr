import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './LoginSpinner';
import { userLoading, user } from './User';
import { userMenu } from './UserMenu';
import { activeAnalysis, pendingLoading, pendingErrored, pendingList } from './Analyzes';
import { specimenSelected } from './Specimen';
import { patientIsCollapsed } from './Collapse';
import { dropDown } from './DropDown';



const RootReducer = combineReducers({
    notificationCss,
    notificationText,

    loginSpinner,

    userLoading,
    user,

    userMenu,

    activeAnalysis,
    pendingLoading,
    pendingErrored,
    pendingList,

    specimenSelected,

    patientIsCollapsed,

    dropDown,
});

export default RootReducer;