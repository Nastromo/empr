import API from '../../utils/Api';
import { showNotification } from './Notification';


export const showSlidePopup = (bool) => ({
    type: `SHOW_SLIDE_POPUP`,
    bool
});


export const request = (patient) => {
    return async (dispatch, getState) => {
        try {
            delete patient.id;
            patient.stage = getState().patient.addSlide;
            await API.post(`/v1/additional-slide`, patient);
            window.location = `/account/pending`;
        } catch (err) {
            console.log(err);
            dispatch(showNotification(`Error`, `notification-show`));
        }
    }
};