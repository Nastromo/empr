export const selectRow = (index) => ({
    type: `SELECT_PATIENT`,
    index
});

export const showAnalysisInfo = (patient) => ({
    type: `SHOW_PATIENT_INFO`,
    patient
});

export const showSpecimen = (index, patient) => {
    return async (dispatch, getState) => {
        try {
            dispatch(selectRow(index));
            dispatch(showAnalysisInfo(patient));
        } catch (err) {
            console.log(err);
        }
    }
}

