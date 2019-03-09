export const patientIsCollapsed = (state = false, action) => {
    switch (action.type) {
        case `COLLAPSE_PATIENT`:
            return action.bool

        default: return state;
    }
}