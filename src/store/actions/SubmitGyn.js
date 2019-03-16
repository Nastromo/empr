import API from '../../utils/Api';
import { showSaveSpinner, showSubmitSpinner } from './Spinner';
import { showNotification } from './Notification';



export const savePatient = (patient) => {
    return async (dispatch, getState) => {
        try {
            const user = getState().user.login;
            dispatch(showSaveSpinner(true));
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            await API.post(`/v1/save-gyn`, patient);
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
            patient.stage = `processing`;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            await API.post(`/v1/submit-gyn`, patient);
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Submitted...`, `notification-green`));
        } catch (err) {
            console.log(err);
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};