export const selectRow = (index) => ({
    type: `SELECT_BATCH`,
    index
});

export const showBatchInfo = (batch) => ({
    type: `SHOW_BATCH_INFO`,
    batch
});

export const showBatch = (index, batch) => {
    return async (dispatch, getState) => {
        try {
            dispatch(selectRow(index));
            dispatch(showBatchInfo(batch));
        } catch (err) {
            console.log(err);
        }
    }
}