export const dropDown = (state = {}, action) => {
    switch (action.type) {
        case `SHOW_DROP_DOWN`:
            return action.obj

        default: return state;
    }
}