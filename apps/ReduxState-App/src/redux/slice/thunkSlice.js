import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchDataByThunk = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=10");
      dispatch(setData(response.data));
    } catch (error) {
      dispatch(setError(true));
      console.error("Error:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const thunkSlice=createSlice({
    name: 'thunk',
    initialState:{
        loading: false,
        isError: false,
        data: null,
    },
      reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.isError = false;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
}
})

export const {setLoading,setData,setError }= thunkSlice.actions;

export default thunkSlice.reducer;