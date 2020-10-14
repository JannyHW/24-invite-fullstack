import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const notGoingSlice = createSlice({
    name: "notGoing",
    initialState: {
      notGoing: [],
    },
    reducers: {
      notGoingUser: (state, action) => {
        state.notGoing = action.payload;
      },
    },
  });

export const { notGoingUser } = notGoingSlice.actions;

export const getNotGoing = () => (dispatch) => {
  axios.get("/api/notgoing").then((resp) => {
    console.log(resp.data);
    dispatch(notGoingUser(resp.data));
  });
};

export const selectNotGoing = (state) => state.notGoing.notGoing;

export default notGoingSlice.reducer;