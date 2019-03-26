export const pendingErrored = (state = ``, action) => {
    switch (action.type) {
        case `ADD_ANALYSIS`:
            return action.title

        default: return state;
    }
}