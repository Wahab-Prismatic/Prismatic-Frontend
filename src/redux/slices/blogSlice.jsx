import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

//Async thunk for fetching blogs data
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (page = 1, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get(`/blogs-react?page=${page}`);
    console.log("Blog Slice Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);

    // If there is an error response, return a rejection with the error data
    if (error.response) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Something went wrong...',
        status: error.response?.status || 500
      });
    } else {
      // If there is no specific error response, return a generic error message
      return rejectWithValue('An error occurred while fetching blogs.');
    }
  }
});

export const fetchBlogDetails = createAsyncThunk('blogs/fetchBlogDetails', async (slug, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get(`/blogs/${slug}`);
    console.log("Blogs Slug Deatil:", response);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : 'Something went wrong.');
  }
});

// Blog Slice

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    currentBlog: null,
    loading: false,
    error: null,
    currentPage: 1,
    lastPage: 1,
    total: 0,
    perPage: 6,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.data || [];
        console.log("State BLogs Data:", state.blogs);
        state.currentPage = action.payload.current_page;
        state.lastPage = action.payload.last_page;
        state.total = action.payload.total;
        state.perPage = action.payload.per_page;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchBlogDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBlog = action.payload; // assuming you want to store this blog in a separate state
      })
      .addCase(fetchBlogDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;