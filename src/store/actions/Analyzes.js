import API from '../../utils/Api';
import { selectRow } from './Specimen';


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

export const getPendingList = (index, title) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setActive(index));
            dispatch(selectRow(0));
            dispatch(pendingListLoading(true));
            const res = await API.post(`/v1/pending`, { title });
            dispatch(pendingListLoading(false));
            dispatch(setList(res.data));
        } catch (err) {
            console.log(err)
            dispatch(pendingListLoading(false));
            dispatch(pendingListErrored(true));
            console.log(err);
        }
    }
}