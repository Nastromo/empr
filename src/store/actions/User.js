import { showNotification } from './Notification';
import API from '../../utils/Api';


export const isLoading = (bool) => ({
    type: 'USER_LOADING',
    bool
});


export const setUser = (user) => ({
    type: 'SET_USER',
    user
});


export const getUser = (history) => {
    return async (dispatch, getState) => {
        try {
            dispatch(isLoading(true));
            const res = await API.get(`/v1/user`, {});
            dispatch(setUser(res.data));
            dispatch(isLoading(false));
        } catch (err) {
            history.push(`/`);
            if (err.response) {
                switch (err.response.data) {
                    case `invalid token`:
                        dispatch(showNotification(`Your token is invalid`, `notification-show`));
                        break;
                    default: dispatch(showNotification(`Please, enter login and password`, `notification-show`));
                }
            } else {
                dispatch(showNotification(`Something went wrong while fetching user info...`, `notification-show`));
            }
        }
    }
};



export const setRole = (text) => ({
    type: 'SET_ROLE',
    text
});

export const setLogin = (text) => ({
    type: 'SET_LOGIN',
    text
});

export const setPass = (text) => ({
    type: 'SET_PASS',
    text
});

export const addNewUser = (user) => {
    return async (dispatch, getState) => {
        try {
            user.regDate = Date.now();
            const res = await API.post(`/v1/user`, user);
            dispatch(setUsersList(res.data));
        } catch (err) {
            console.log(err);
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};


export const setUsersList = (list) => ({
    type: 'SET_USER_LIST',
    list
});


export const getUsers = (user) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/get-users`);
            dispatch(setUsersList(res.data));
        } catch (err) {
            console.log(err);
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};

export const deleteUser = (login) => {
    return async (dispatch, getState) => {
        try {
            console.log(login)
            const res = await API.post(`/v1/get-users`, {login});
            dispatch(setUsersList(res.data));
        } catch (err) {
            console.log(err);
            dispatch(showNotification(`Error!`, `notification-show`));
        }
    }
};
