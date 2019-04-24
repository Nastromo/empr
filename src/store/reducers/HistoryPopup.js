export const historyPopup = (state = false, action) => {
    switch (action.type) {
        case `SHOW_HISTORY_POPUP`:
            return action.bool

        default: return state;
    }
}