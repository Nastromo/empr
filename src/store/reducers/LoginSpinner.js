export const loginSpinner = (state = false, action) => {
    switch (action.type) {
        case `SHOW_LOGIN_SPINNER`:
            return action.bool;

        default: return state;
    }
}