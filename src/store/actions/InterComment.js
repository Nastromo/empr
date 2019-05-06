export const changeComment = (text) => ({
    type: 'SET_INTER_COMMENT',
    text
});

export const externalComment = (text) => ({
    type: 'SET_EXTERNAL_COMMENT',
    text
});

export const internalComment = (text) => ({
    type: 'SET_INTERNAL_COMMENT',
    text
});