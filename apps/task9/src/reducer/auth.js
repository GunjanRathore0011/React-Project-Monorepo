
export const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authReducer = (state, action) => {
    switch(action.type){
        case 'login-start': return{...state, loading: true, error: false};

        case 'login-success': return {...state, loading: false, error: false ,user: action.payload, isAuthenticated: true};

        case 'login-failure': return {...state, error: true, loading: false};

        case 'logout': return {...state, user:null ,isAuthenticated: false};
    }
};
