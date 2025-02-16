import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";

export const fetchLoginUser = createAsyncThunk(
  "login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      return response.data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "profile",
  async ( thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) throw new Error("no token found");
      const response = await axiosInstance.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.log("error")
      return thunkAPI.rejectWithValue(error || "unauthorized");
    }
  }
);

const userSlice = createSlice({
  name: "loginSlice",
  initialState: {
    user: {
      token: [],
      userData:'',
      isUserLoading: false,
      error: null,
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginUser.pending, (state) => {
        (state.isUserLoading = true), (state.error = null);
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        (state.isUserLoading = false), (state.token = action.payload);
      })
      .addCase(fetchLoginUser.rejected, (state, action) => {
        (state.isUserLoading = false), (state.error = action.payload);
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        (state.isUserLoading = false), (state.userData = action.payload);
      })
  },
});

export default userSlice.reducer;
