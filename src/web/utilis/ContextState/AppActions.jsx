import {useAppContext} from "./AppContext";

// export const SET_USER_VALUE = 'SET_USER_VALUE';
// export const SET_USER = 'SET_USER';
// export const CLEAR_USER = 'CLEAR_USER';
// export const LOGIN = 'LOGIN';
// export const LOGOUT = 'LOGOUT';

// export const setShowUser = (user) => ({
//     type: SET_USER,
//     payload: user,
// });

// export const SetUser = async (user, dispatch, state) => {
//     try {
//         await dispatch({type: SET_USER_VALUE, payload: true})
//
//         setTimeout(() => {
//             dispatch({type: SET_USER, payload: user})
//         }, 3000);
//
//         await dispatch({type: SET_USER_VALUE, payload: false})
//     } catch (e) {
//         console.log(e)
//     }
// };

// export const useUserActions = () => {
//     const {state, dispatch} = useAppContext();
//     const clearUser = () => {
//         dispatch({type: CLEAR_USER, payload: true});
//     };
//
//     const login = (credentials) => {
//         dispatch({type: LOGIN, payload: credentials});
//     };
//
//     const logout = () => {
//         dispatch({type: LOGOUT, payload: {}});
//     };
//
//     return {clearUser, login, logout};
// };
const simulateAsyncOperation = async (dispatch) => {
    setTimeout(() => {
        // localStorage.setItem('estrade_verify', 'true');

        dispatch({type: 'SET_USER_VERIFY'})
        dispatch({type: 'SET_LOADING', payload: false});
    }, 1000);

};

export const verifyUser = async (state, dispatch) => {
    await simulateAsyncOperation(dispatch);
};