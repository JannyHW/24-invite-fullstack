import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const inviteSlice = createSlice({ //import to store.js
  name: 'invite',
  initialState: {
    user: {}
  },
  reducers: {
    randomUser:  (state, action) => {
      state.user = action.payload
    }
  },
});

export const { randomUser, goingUser, notGoingUser } = inviteSlice.actions; //import to Invite.js


export const getInvite = () => (dispatch) => { //import to Invite.js
  axios.get("/api").then((resp) => {
    dispatch(randomUser(resp.data));
  });
};

export const addGoing = (user) => (dispatch) => {
  axios.post("/api/mark-invitee", { ...user, going: true }).then((resp) => {
    dispatch(getInvite());
  });
};

export const addNotGoing = (user) => (dispatch) => {
  axios.post("/api/mark-invitee", { ...user, going: false }).then((resp) => {
    dispatch(getInvite());
  });
};


export const selectInvite = state => state.invite.user; //import to Invite.js

export default inviteSlice.reducer;