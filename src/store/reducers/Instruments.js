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

export const instrumList = (state = [], action) => {
    switch (action.type) {
        case `SET_INSTRUMENT_LIST`:
            return action.instrumList;

        default: return state;
    }
}

export const newInstrumTitle = (state = ``, action) => {
    switch (action.type) {
        case `SET_INSTRUM_TITLE`:
            return action.text;

        default: return state;
    }
}

export const newInstrumType = (state = ``, action) => {
    switch (action.type) {
        case `SET_INSTRUM_TYPE`:
            return action.text;

        default: return state;
    }
}

export const newInstrumList = (state = [], action) => {
    switch (action.type) {
        case `SET_NEW_INSTRUM_LIST`:
            return action.list;

        default: return state;
    }
}