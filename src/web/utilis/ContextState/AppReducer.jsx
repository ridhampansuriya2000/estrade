import LocalStorageManager from "../LocalStorage/LocatStorage";

export const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {...state, loading: action.payload};
        case 'SET_USER_VERIFY': {
            return {...state, userVerify: LocalStorageManager.getLocalStorage("estrade_verify") === true}
        }
        default:
            return state;
    }
};
