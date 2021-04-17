const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    email: null,
    password: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (email, password, isAuth) => ({type: SET_USER_DATA, payload:{email, password, isAuth}});

export const login = (email, password) => (dispatch) => {
   dispatch(setAuthUserData(email, password, true))
}

export const logout = () => (dispatch) => {
  dispatch(setAuthUserData(null, null, false));
}


export default authReducer;
