import API from '../../utils/Api';
import { showSpecimen } from './Specimen';



export const setActive = (index) => ({
    type: 'SET_ACTIVE_ANALYSIS',
    index
});

export const pendingListLoading = (bool) => ({
    type: 'PENDING_LIST_LOADING',
    bool
});

export const pendingListErrored = (bool) => ({
    type: 'PENDING_LIST_ERRORED',
    bool
});

export const setList = (list) => ({
    type: 'SET_PENDING_LIST',
    list
});

export const setProcessingList = (list) => ({
    type: 'SET_PROCESSING_LIST',
    list
});

export const setScreeningList = (list) => ({
    type: 'SET_SCREENING_LIST',
    list
});

export const getPendingList = (index, title) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setActive(index));
            dispatch(pendingListLoading(true));
            const res = await API.post(`/v1/pending`, { title });
            dispatch(pendingListLoading(false));
            dispatch(setList(res.data));
            dispatch(showSpecimen(0 , res.data[0]));
        } catch (err) {
            dispatch(pendingListLoading(false));
            dispatch(pendingListErrored(true));
            console.log(err);
        }
    }
}


export const getProcessingList = (index, title) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setActive(index));
            dispatch(pendingListLoading(true));
            const res = await API.post(`/v1/processing`, { title });
            dispatch(pendingListLoading(false));
            dispatch(setProcessingList(res.data));
        } catch (err) {
            dispatch(pendingListLoading(false));
            dispatch(pendingListErrored(true));
            console.log(err);
        }
    }
}


export const getScreeningList = (index, title) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setActive(index));
            dispatch(pendingListLoading(true));
            const res = await API.post(`/v1/screening`, { title });
            dispatch(pendingListLoading(false));
            dispatch(setScreeningList(res.data));
            dispatch(showSpecimen(0 , res.data[0]));
        } catch (err) {
            dispatch(pendingListLoading(false));
            dispatch(pendingListErrored(true));
            console.log(err);
        }
    }
}


export const getStainQcList = (index, title) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setActive(index));
            dispatch(pendingListLoading(true));
            const res = await API.post(`/v1/stain-qc`, { title });
            dispatch(pendingListLoading(false));
            dispatch(setList(res.data));
            dispatch(showSpecimen(0 , res.data[0]));
        } catch (err) {
            dispatch(pendingListLoading(false));
            dispatch(pendingListErrored(true));
            console.log(err);
        }
    }
}

