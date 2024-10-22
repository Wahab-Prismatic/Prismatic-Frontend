import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClinet from "../../api/axiosClient";

//Async thunk for fetching blogs data
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axiosClinet.get('/blogs');
    console.log("Blog Slice Response", response);
    return response.data.data;
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