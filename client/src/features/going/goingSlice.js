

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const goingSlice = createSlice({
    name: "going",
    initialState: {
      going: [],
    },
    reducers: {
      goingUser: (state, action) => {
        state.going = action.payload;
      },
    },
  });

export const { goingUser } = goingSlice.actions;

export const getGoing = () => (dispatch) => {
  axios.get("/api/going").then((resp) => {
    // console.log(resp.data);
    dispatch(goingUser(resp.data));
  });
};

export const selectGoing = (state) => state.going.going;

export default goingSlice.reducer;