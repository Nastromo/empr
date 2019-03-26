export const activePreTab = (state = `Specimen Adequacy`, action) => {
    switch (action.type) {
        case `SET_PRE_TAB`:
            return action.title

        default: return state;
    }
}