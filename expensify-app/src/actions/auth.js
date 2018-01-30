import { firebase, googleAuthProvider } from '../firebase/firebase';
import { push } from 'react-router-redux';

import { startSetExpenses } from './expenses';

export const startLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            dispatch(startSetExpenses()).then(() => {
                dispatch(login(result.user.uid));
                dispatch(push('/dashboard'));
            });
        }, (error) => {
            console.log('Google login error', error);
        });
    };
};

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