import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner, instrumSpinner, saveSpinner, submitSpinner } from './Spinner';
import { userLoading, user, userRole, userLogin, userPass, userList } from './User';
import { userMenu } from './UserMenu';
import { activeAnalysis, pendingLoading, pendingErrored, pendingList, processingList } from './Analyzes';
import { specimenSelected } from './Specimen';
import { patientIsCollapsed, grossingIsCollapsed, infoIsCollapsed } from './Collapse';
import { dropDown } from './DropDown';
import { patient } from './Patient';
import { printStaus, printOption } from './Print';
import { instrumTypeStaus, instrumTypeOption } from './InstrumDropDown';
import { instrumStaus, instrumOption, instruments, instrumList, newInstrumTitle, newInstrumType, newInstrumList } from './Instruments';
import { activeGrossTab } from './GrossTabs';
import { activePreTab } from './PreTabs';



const RootReducer = combineReducers({
    notificationCss,
    notificationText,

    loginSpinner,
    instrumSpinner,
    saveSpinner,
    submitSpinner,

    userLoading,
    user,
    userRole,
    userLogin,
    userPass,
    userList,

    userMenu,

    activeAnalysis,
    pendingLoading,
    pendingErrored,
    pendingList,
    processingList,

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
    instruments,
    instrumList,
    newInstrumTitle,
    newInstrumType,
    newInstrumList,

    activeGrossTab,
    activePreTab,

});

export default RootReducer;