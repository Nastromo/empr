export const activeAnalysis = (state = 0, action) => {
    switch (action.type) {
        case `SET_ACTIVE_ANALYSIS`:
            return action.index

        default: return state;
    }
}

export const pendingLoading = (state = true, action) => {
    switch (action.type) {
        case `PENDING_LIST_LOADING`:
            return action.bool

        default: return state;
    }
}

export const pendingErrored = (state = false, action) => {
    switch (action.type) {
        case `PENDING_LIST_ERRORED`:
            return action.bool

        default: return state;
    }
}

export const pendingList = (state = [], action) => {
    switch (action.type) {
        case `SET_PENDING_LIST`:
            return action.list

        default: return state;
    }
}

export const processingList = (state = [], action) => {
    switch (action.type) {
        case `SET_PROCESSING_LIST`:
            return action.list

        default: return state;
    }
}