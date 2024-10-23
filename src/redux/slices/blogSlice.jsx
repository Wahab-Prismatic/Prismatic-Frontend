import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

//Async thunk for fetching blogs data
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (_, {rejectWithValue}) => {
    try {
        const response = await axiosClient.get('/blogs');
        console.log("Blog Slice Response", response);
        return response.data.data;
      } catch (error) {
        console.error('Error fetching blogs:', error);
  
        // If there is an error response, return a rejection with the error data
        if (error.response) {
          return rejectWithValue(error.response.data);
        } else {
          // If there is no specific error response, return a generic error message
          return rejectWithValue('An error occurred while fetching blogs.');
        }
      }
});

// Blog Slice

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.loading = false;
            state.blogs = action.payload;
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default blogSlice.reducer;