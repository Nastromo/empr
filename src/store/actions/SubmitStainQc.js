import API from '../../utils/Api';
import { showSubmitSpinner } from './Spinner';
import { showNotification } from './Notification';
import { setList } from './Analyzes';




export const submitPatient = (patient) => {
    return async (dispatch, getState) => {
        const analysis = getState().activeAnalysis;
        const user = getState().user.login;
        try {
            dispatch(showSubmitSpinner(true));
            delete patient.id;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            const stage = patient.qcResults;
            let res;
            switch (analysis) {
                case 0:
                    patient.stage = `${stage} stain qc`;
                    res = await API.post(`/v1/submit-gyn-stain-qc`, patient);
                    break;
                case 1:
                    patient.stage = `${stage} stain qc`;
                    res = await API.post(`/v1/submit-ngyn-stain-qc`, patient);
                    break;
                default: break;
            }
            dispatch(setList(res.data));
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Submited...`, `notification-green`));
        } catch (err) {
            console.log(err);
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};