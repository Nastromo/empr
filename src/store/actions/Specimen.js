export const selectRow = (index) => ({
    type: `SELECT_PATIENT`,
    index
});

export const showSpecimen = (index, accession) => {
    return async (dispatch, getState) => {
        try {
            dispatch(selectRow(index));

        } catch (err) {
            console.log(err);
        }
    }
}