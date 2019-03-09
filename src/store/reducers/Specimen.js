export const specimenSelected = (state = 0, action) => {
    switch (action.type) {
        case `SELECT_PATIENT`:
            return action.index;

        default: return state;
    }
}