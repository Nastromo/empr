export const activeAnalysis = (state = 0, action) => {
    switch (action.type) {
        case `SET_ACTIVE_ANALYSIS`:
            return action.index

        default: return state;
    }
}