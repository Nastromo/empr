export const pdfData = (state = null, action) => {
    switch (action.type) {
        case `SET_PDF_DATA`:
            return action.data;

        default: return state;
    }
}