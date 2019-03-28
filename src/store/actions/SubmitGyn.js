import API from '../../utils/Api';
import { showSaveSpinner, showSubmitSpinner } from './Spinner';
import { showNotification } from './Notification';
import { setList } from './Analyzes';



export const savePatient = (patient) => {

    return async (dispatch, getState) => {
        const analysis = getState().activeAnalysis;
        try {
            const user = getState().user.login;
            dispatch(showSaveSpinner(true));
            delete patient.id;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            let res;
            switch (analysis) {
                case 0:
                    res = await API.post(`/v1/save-gyn`, patient);
                    break;
                case 1:
                    res = await API.post(`/v1/save-ngyn`, patient);
                    break;
                case 2:
                    res = await API.post(`/v1/save-uvfish`, patient);
                    break;
                default: break;
            }
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
        const analysis = getState().activeAnalysis;
        try {
            const user = getState().user.login;
            dispatch(showSubmitSpinner(true));
            delete patient.id;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            switch (analysis) {
                case 0:
                    patient.stage = `screening`;
                    await API.post(`/v1/submit-gyn`, patient);
                    break;
                case 1:
                    patient.stage = `screening`;
                    await API.post(`/v1/submit-ngyn`, patient);
                    break;
                case 2:
                    patient.stage = `processing`;
                    await API.post(`/v1/submit-uvfish`, patient);
                    break;
                default: break;
            }
            window.location = `/account/pending`;
        } catch (err) {
            console.log(err);
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};