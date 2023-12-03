import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    isAuthenticated: false,
    userData: {},
  },
  reducers: {
    setUsers: (state, data) => {
      state.users = data.payload;
    },
    setUserData: (state, data) => {
      state.isAuthenticated = true;
      state.userData = data.payload;
    },
  },
});

export const { setUsers, setUserData } = userSlice.actions;

export default userSlice.reducer;
