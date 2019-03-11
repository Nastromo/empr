export const printStaus = (state = false, action) => {
    switch (action.type) {
        case `PRINT_DROP_DOWN`:
            return action.bool;

        default: return state;
    }
}

export const printOption = (state = `Select`, action) => {
    switch (action.type) {
        case `PRINT_OPTION`:
            return action.option;

        default: return state;
    }
}