import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner, instrumSpinner } from './Spinner';
import { userLoading, user } from './User';
import { userMenu } from './UserMenu';
import { activeAnalysis, pendingLoading, pendingErrored, pendingList } from './Analyzes';
import { specimenSelected } from './Specimen';
import { patientIsCollapsed, grossingIsCollapsed, infoIsCollapsed } from './Collapse';
import { dropDown } from './DropDown';
import { patient } from './Patient';
import { printStaus, printOption } from './Print';
import { instrumTypeStaus, instrumTypeOption } from './InstrumDropDown';
import { instrumStaus, instrumOption, instruments } from './Instruments';



const RootReducer = combineReducers({
    notificationCss,
    notificationText,

    loginSpinner,
    instrumSpinner,

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

    printStaus,
    printOption,

    instrumTypeStaus,
    instrumTypeOption,

    instrumStaus,
    instrumOption,
    instruments

});

export default RootReducer;