export const changeComment = (text) => ({
    type: 'SET_INTER_COMMENT',
    text
});

export const externComment = (text) => ({
    type: 'SET_EXTERNAL_COMMENT',
    text
});

export const internComment = (text) => ({
    type: 'SET_INTERNAL_COMMENT',
    text
});