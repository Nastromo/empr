export const showPhotoPreview = (photos) => ({
    type: 'SET_PHOTOS',
    photos
});

export const bindImages = (photos) => ({
    type: 'SET_REAL_PHOTOS',
    photos
});

export const setImages = (photos) => ({
    type: 'SET_EDITED_PHOTOS',
    photos
});