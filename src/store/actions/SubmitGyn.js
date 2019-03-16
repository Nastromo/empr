import API from '../../utils/Api';
import { showSaveSpinner, showSubmitSpinner } from './Spinner';
import { showNotification } from './Notification';
import { setList } from './Analyzes';



export const savePatient = (patient) => {
    
    return async (dispatch, getState) => {
        try {
            const user = getState().user.login;
            dispatch(showSaveSpinner(true));
            delete patient.id;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            const res = await API.post(`/v1/save-gyn`, patient);
            dispatch(setList(res.data));
            dispatch(showSaveSpinner(false));
            dispatch(showNotification(`Saved...`, `notification-green`));
        } catch (err) {
            console.log(err);
            dispatch(showSaveSpinner(false));
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};

export const submitPatient = (patient) => {
    return async (dispatch, getState) => {
        try {
            const user = getState().user.login;
            dispatch(showSubmitSpinner(true));
            delete patient.id;
            patient.stage = `processing`;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            const res = await API.post(`/v1/submit-gyn`, patient);
            dispatch(setList(res.data));
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Submitted...`, `notification-green`));
        } catch (err) {
            console.log(err);
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};