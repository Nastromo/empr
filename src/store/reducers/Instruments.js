export const instrumStaus = (state = false, action) => {
    switch (action.type) {
        case `SHOW_INSTRUM_DROP`:
            return action.bool;

        default: return state;
    }
}

export const instrumOption = (state = `Select`, action) => {
    switch (action.type) {
        case `SET_INSTRUM_DROP_OPTION`:
            return action.option;

        default: return state;
    }
}

export const instruments = (state = [], action) => {
    switch (action.type) {
        case `SET_INSTRUMENTS`:
            return action.instruments;

        default: return state;
    }
}