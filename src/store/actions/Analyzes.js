export const setActive = (index) => ({
    type: 'SET_ACTIVE_ANALYSIS',
    index
});

export const getData = (index, title) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setActive(index));
            // get data about pending pacients here
        } catch (err) {
            console.log(err);
        }
    }
}