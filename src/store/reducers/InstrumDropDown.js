export const instrumTypeStaus = (state = false, action) => {
    switch (action.type) {
        case `SHOW_INSTRUM_DROP_DOWN`:
            return action.bool;

        default: return state;
    }
}

export const instrumTypeOption = (state = `Select`, action) => {
    switch (action.type) {
        case `SET_INSTRUM_DROP_DOWN_OPTION`:
            return action.option;

        default: return state;
    }
}