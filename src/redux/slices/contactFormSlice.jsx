import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClinet from "../../api/axiosClient";

export const submitContactForm = createAsyncThunk('contactForm/submitContactForm', async (formData, {rejectWithValue}) => {
    try {
        const response = await axiosClinet.post('/contact-form', formData);
        console.log("Form Data form slice", response);
        return response.data;
    } catch (error) {
        if(error.response) {
            // Return the error message from the response
            return rejectWithValue(error.response.data.message);
        } else {
            // Handle other types of errors
            return rejectWithValue('An error occurred while submitting the form.'); 
        }
    }
});

const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState: {
        loading: false,
        successMessage: '',
        errorMessage: '',
        errors: [],
    },

    reducers: {
        clearMessages: (state) => {
            state.successMessage = '';
            state.errorMessage = '';
            state.errors = [];
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(submitContactForm.pending, (state) => {
                state.loading = true;
                state.successMessage = '';
                state.errorMessage = '';
                state.errors = [];
            })

            .addCase(submitContactForm.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = action.payload.message || 'Message sent successfully!';
                state.errors = [];
            })

            .addCase(submitContactForm.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload || 'An error occurred';
                state.errors = Array.isArray(action.payload) ? action.payload : [action.payload];
            });
    },
});

export const { clearMessages } = contactFormSlice.actions;
export default contactFormSlice.reducer;