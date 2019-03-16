import API from '../../utils/Api';
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

export const setFirst = (instrument) => ({
    type: 'SET_FIRST_INSTRUMENTS',
    instrument
});

export const setSecond = (instrument) => ({
    type: 'SET_SECOND_INSTRUMENTS',
    instrument
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


export const changeInstrument = (title, action, i) => {
    return async (dispatch, getState) => {
        if (action === `add`) {
            if (i === 1) dispatch(setFirst(title));
            else dispatch(setSecond(title));
        } else {
            if (i === 1) dispatch(setFirst(null));
            else dispatch(setSecond(null));
        }
    }
};