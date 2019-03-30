export const gynCounter = (state = 0, action) => {
    switch (action.type) {
        case `CHANGE_COUNT_G`:
            return action.obj;

        default: return state;
    }
}

export const popupStatus = (state = false, action) => {
    switch (action.type) {
        case `CHANGE_POPUP_VISIBILITY`:
            return action.bool;

        default: return state;
    }
}