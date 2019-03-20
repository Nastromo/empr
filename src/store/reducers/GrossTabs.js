export const activeGrossTab = (state = `Fluid`, action) => {
    switch (action.type) {
        case `SET_GROSS_TAB`:
            return action.title

        default: return state;
    }
}