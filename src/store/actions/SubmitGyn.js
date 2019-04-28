import API from '../../utils/Api';
import { showSaveSpinner, showSubmitSpinner, showCancelSpinner, showDeleteSpinner } from './Spinner';
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
                    patient.stage = `pending screening`;
                    await API.post(`/v1/submit-gyn`, patient);
                    break;
                case 1:
                    patient.stage = `pending screening`;
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


export const cancelPatient = (patient) => {
    return async (dispatch, getState) => {
        const analysis = getState().activeAnalysis;
        try {
            const user = getState().user.login;
            dispatch(showCancelSpinner(true));
            delete patient.id;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            switch (analysis) {
                case 0:
                    patient.stage = `case canceled`;
                    await API.post(`/v1/cancel-gyn`, patient);
                    break;
                case 1:
                    patient.stage = `case canceled`;
                    await API.post(`/v1/cancel-ngyn`, patient);
                    break;
                case 2:
                    patient.stage = `case canceled`;
                    await API.post(`/v1/cancel-uvfish`, patient);
                    break;
                default: break;
            }
            window.location = `/account/pending`;
        } catch (err) {
            console.log(err);
            dispatch(showCancelSpinner(false));
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};


export const deletePatient = (patient) => {
    return async (dispatch, getState) => {
        const analysis = getState().activeAnalysis;
        try {
            const user = getState().user.login;
            dispatch(showDeleteSpinner(true));
            delete patient.id;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            switch (analysis) {
                case 0:
                    patient.stage = `case deleted`;
                    await API.post(`/v1/delete-gyn`, patient);
                    break;
                case 1:
                    patient.stage = `case deleted`;
                    await API.post(`/v1/delete-ngyn`, patient);
                    break;
                case 2:
                    patient.stage = `case deleted`;
                    await API.post(`/v1/delete-uvfish`, patient);
                    break;
                default: break;
            }
            window.location = `/account/pending`;
        } catch (err) {
            console.log(err);
            dispatch(showDeleteSpinner(false));
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};

const toPathologist = [`ADENO`, `AGEC`, `AGEC N`, `AGEM`, `AGUS`, `AGUS H`, `AGUS N`, `AIS`, `ASCUS`, `ASCUS H`, `CIS`, `H VaIN`, `HSIL`, `HSIL S`, `L VaIN`, `LSIL`, `LSIL H`, `MNEO`, `SCC`, `SMC`];

export const submitScreening = (patient) => {
    return async (dispatch, getState) => {
        const analysis = getState().activeAnalysis;
        try {
            const user = getState().user.login;
            dispatch(showSubmitSpinner(true));
            delete patient.id;
            patient.lastUpdate = Date.now();
            patient.updatedBy = user;
            patient.stage = `final`;
            patient.status = `final`;
            switch (analysis) {
                case 0:
                    for (let i = 0; i < toPathologist.length; i++) {
                        if (patient.preAnalysis.includes(toPathologist[i])) {
                            patient.stage = `pathologist`;
                            patient.status = `pathologist`;
                            break;
                        }
                    }
                    await API.post(`/v1/submit-screening-gyn`, patient);

                    const fd = new FormData();
                    const photos = getState().photos;
                    
                    for (let j = 0; j < photos.length; j++) {
                        fd.append(`image`, photos[j]);    
                    }
                    
                    await API.post(`/v1/add-photos`, fd, {
                        'Content-Type': `multipart/form-data`
                    });

                    break;
                case 1:
                    await API.post(`/v1/submit-screening-ngyn`, patient);
                    break;
                case 2:
                    await API.post(`/v1/submit-screening-uvfish`, patient);
                    break;
                default: break;
            }
            window.location = `/account/screening`;
        } catch (err) {
            console.log(err);
            dispatch(showSubmitSpinner(false));
            dispatch(showNotification(err.response ? err.response.data : `Error!`, `notification-show`));
        }
    }
};