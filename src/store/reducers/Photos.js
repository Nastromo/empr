export const photos = (state = ``, action) => {
    switch (action.type) {
        case `SET_REAL_PHOTOS`:
            return action.photos;

        default: return state;
    }
}