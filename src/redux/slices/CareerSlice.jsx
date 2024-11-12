import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

// Async thunk for fetching careers data

export const fetchCareers = createAsyncThunk('career/fetchCareers', async (_, { rejectWithValue }) => {
    try {
        const response = await axiosClient.get('/admin/career-list', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        console.log("Career Response Data:", response.data);
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const careerSlice = createSlice({
    name: 'career',
    initialState: {
        careers: [],
        loading: false,
        error: null
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCareers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchCareers.fulfilled, (state, action) => {
                state.loading = false;
                state.careers = action.payload;
            }) 

            .addCase(fetchCareers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default careerSlice.reducer;