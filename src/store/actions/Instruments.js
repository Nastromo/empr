import API from '../../utils/Api';
import { showAddInstumSpinner } from './Spinner';
import { showNotification } from './Notification';


export const showList = (bool) => ({
    type: 'SHOW_INSTRUM_DROP',
    bool
});

export const setOption = (option) => ({
    type: 'SET_INSTRUM_DROP_OPTION',
    option
});

export const setInstuments = (instruments) => ({
    type: 'SET_INSTRUMENTS',
    instruments
});

export const setInstumentList = (instruments) => ({
    type: 'SET_INSTRUMENT_LIST',
    instruments
});

export const getInstrumTypeList = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`v1/instruments`);
            dispatch(setInstumentList(res.data));
        } catch (err) {
            dispatch(showNotification(`Error`, `notification-show`));
            console.log(err);
        }
    }
};

export const addInstrument = (title) => {
    return async (dispatch, getState) => {
        try {
            dispatch(showAddInstumSpinner(true));
            // const res = await API.post(`v1/chose-instrument`, { title });
            dispatch(setInstuments([`res.data.instuments`, `second one`]));
        } catch (err) {
            dispatch(showAddInstumSpinner(false));
            dispatch(showNotification(`This instrument is already in use`, `notification-show`));
            console.log(err);
        }
    }
};

export const deleteInstum = (title) => {
    return async (dispatch, getState) => {
        try {
            // const res = await API.post(`v1/del-instrument`, { title });
            dispatch(setInstuments([`res.data.instuments`]));
        } catch (err) {
            console.log(err);
            dispatch(showNotification(`Can't delete this instrument`, `notification-show`));
        }
    }
};