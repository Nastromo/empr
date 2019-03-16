import API from '../../utils/Api';
import { showNotification } from './Notification';




export const setType = (text) => ({
    type: 'SET_INSTRUM_TYPE',
    text
});

export const setTitle = (text) => ({
    type: 'SET_INSTRUM_TITLE',
    text
});



export const addNewInstrum = (instrum) => {
    return async (dispatch, getState) => {
        try {
            await API.post(`/v1/instruments`, instrum);
            window.location = `/account/instruments`;
        } catch (err) {
            console.log(err);
            if (err.response) dispatch(showNotification(err.response.data, `notification-show`));
            else dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};