import API from '../../utils/Api';
import { showSaveSpinner, showSubmitSpinner } from './Spinner';
import { showNotification } from './Notification';



export const savePatient = (patient) => {
    return async (dispatch, getState) => {
        try {
            dispatch(showSaveSpinner(true));
            const res = await API.post(`/save-gyn`, patient);
            dispatch(showSaveSpinner(false));
            dispatch(showNotification(`Saved...`, `notification-gree`));
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
            dispatch(showSubmitSpinner(true));
            const res = await API.post(`/submit-gyn`, patient);
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Submitted...`, `notification-gree`));
        } catch (err) {
            console.log(err);
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};