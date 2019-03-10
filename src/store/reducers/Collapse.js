export const patientIsCollapsed = (state = false, action) => {
    switch (action.type) {
        case `COLLAPSE_PATIENT`:
            return action.bool

        default: return state;
    }
}

export const grossingIsCollapsed = (state = false, action) => {
    switch (action.type) {
        case `COLLAPSE_GROSSING`:
            return action.bool

        default: return state;
    }
}

export const infoIsCollapsed = (state = false, action) => {
    switch (action.type) {
        case `COLLAPSE_INFO`:
            return action.bool

        default: return state;
    }
}