export const userLoading = (state = true, action) => {
    switch (action.type) {
        case `USER_LOADING`:
            return action.bool;

        default: return state;
    }
}

export const user = (state = {}, action) => {
    switch (action.type) {
        case `SET_USER`:
            return action.user;

        default: return state;
    }
}

export const userRole = (state = ``, action) => {
    switch (action.type) {
        case `SET_ROLE`:
            return action.text;

        default: return state;
    }
}

export const userLogin = (state = ``, action) => {
    switch (action.type) {
        case `SET_LOGIN`:
            return action.text;

        default: return state;
    }
}

export const userPass = (state = ``, action) => {
    switch (action.type) {
        case `SET_PASS`:
            return action.text;

        default: return state;
    }
}

export const userList = (state = [], action) => {
    switch (action.type) {
        case `SET_USER_LIST`:
            return action.list;

        default: return state;
    }
}