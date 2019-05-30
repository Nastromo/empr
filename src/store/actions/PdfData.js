import API from '../../utils/Api';
import { showNotification } from './Notification';

export const setPdfData = (data) => ({
    type: 'SET_PDF_DATA',
    data
});

export const getPdfData = (accession) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/pdf-uvfish`, {accession});
            console.log(res.data)
            dispatch(setPdfData(res.data));
        } catch (err) {
            dispatch(showNotification(`Something went wrong while login...`, `notification-show`));
        }
    }
};