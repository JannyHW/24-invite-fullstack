import { configureStore } from '@reduxjs/toolkit';
import inviteReducer from "../features/invite/inviteSlice";
import goingReducer from "../features/going/goingSlice";
import notGoingReducer from "../features/notGoing/notGoingSlice";

export default configureStore({
  reducer: {
    invite: inviteReducer,
    going: goingReducer,
    notGoing: notGoingReducer,
  },
});