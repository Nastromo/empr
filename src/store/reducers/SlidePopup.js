export const slidePopup = (state = false, action) => {
    switch (action.type) {
        case `SHOW_SLIDE_POPUP`:
            return action.bool;

        default: return state;
    }
}