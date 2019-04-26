export const histPopup = (state = false, action) => {
    switch (action.type) {
        case `SHOW_HIST_POPUP`:
            return action.bool

        default: return state;
    }
}