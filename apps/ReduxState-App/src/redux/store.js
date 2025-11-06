import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slice/counterSlice'
import todoReducer from '../redux/slice/todoSlice'
import thunkReducer from './slice/thunkSlice'
import createSagaMiddleware from 'redux-saga'
import userReducer from '../redux/slice/userSlice'
import { userWatcherSaga } from './userSaga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    thunk: thunkReducer,
    users: userReducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})


sagaMiddleware.run(userWatcherSaga);