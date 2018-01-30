import { firebase, googleAuthProvider } from '../firebase/firebase';
import { push } from 'react-router-redux';

import { startSetExpenses } from './expenses';

export const startLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            dispatch(startAfterLogin(result.user.uid));
        }, (error) => {
            console.log('Google login error', error);
        });
    };
};

export const startAfterLogin = (uid) => {
    return (dispatch) => {
        dispatch(login(uid));
        dispatch(push('/dashboard'));
        dispatch(startSetExpenses());
    };
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut().then(() => {
            dispatch(logout());
        });
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});