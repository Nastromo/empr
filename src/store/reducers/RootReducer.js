import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './LoginSpinner';
import { userLoading, user } from './User';
import { userMenu } from './UserMenu';
import { activeAnalysis, pendingLoading, pendingErrored, pendingList } from './Analyzes';
import { specimenSelected } from './Specimen';
import { patientIsCollapsed, grossingIsCollapsed, infoIsCollapsed } from './Collapse';
import { dropDown } from './DropDown';
import { patient } from './Patient';



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
    grossingIsCollapsed,
    infoIsCollapsed,

    dropDown,

    patient,
});

export default RootReducer;