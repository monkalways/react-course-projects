const authDefaultState = {
    uid: undefined
};

const authReducer = (state = authDefaultState, action) => {
    let newHistory;
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                uid: action.uid
            };
        case 'LOGOUT':
            return {
                ...state,
                uid: undefined
            };
        default:
            return state;
    }
};

export default authReducer;