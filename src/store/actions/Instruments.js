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

export const setInstument = (instruments) => ({
    type: 'SET_INSTRUMENTS',
    instruments
});

export const setInstumentList = (instrumList) => ({
    type: 'SET_INSTRUMENT_LIST',
    instrumList
});

export const setChosenInstuments = (instruments) => ({
    type: 'SET_CHOSEN_INSTRUMENTS',
    instruments
});


export const getInstrumTypeList = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`v1/instruments`);
            dispatch(setInstumentList(res.data.types));
            dispatch(setInstument(res.data.instrums));
        } catch (err) {
            dispatch(showNotification(`Error`, `notification-show`));
            console.log(err);
        }
    }
};


export const changeInstrument = (title, action) => {
    return async (dispatch, getState) => {
        try {
            dispatch(showAddInstumSpinner(true));
            console.log(`Сработал!`)
            const res = await API.post(`v1/instruments`, { title, action });
            console.log(res.data)
            dispatch(setChosenInstuments(res.data));
        } catch (err) {
            console.log(err.response);
            dispatch(showAddInstumSpinner(false));
            dispatch(showNotification(err.response.data, `notification-show`));
        }
    }
};