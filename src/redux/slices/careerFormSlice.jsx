import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

export const submitCareerForm = createAsyncThunk('careerForm/submitCareerForm', async (formData, { rejectWithValue }) => {
    try {
        const response = await axiosClient.post('/career-form', formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const careerApplicationSlice = createSlice({
    name: 'careerForm',
    initialState: {
      formData: {
        apply_email: '',
        apply_name: '',
        apply_dob: '',
        apply_m_status: '',
        apply_gender: '',
        apply_cellno: '',
        apply_p_address: '',
        apply_c_address: '',
        apply_cnic: '',
        apply_resp: '',
        apply_study_status: '',
        apply_degree: '',
        apply_institute: '',
        apply_experience: '',
        apply_exp_salary: '',
        // hearing_source: '',
        // cv_pdf: null,
      },
      loading: false,
      successMessage: '',
      errorMessage: '',
    },
    reducers: {
      updateField: (state, action) => {
        const { name, value } = action.payload;
        state.formData[name] = value;
      },
      clearForm: (state) => {
        state.formData = {
          apply_email: '',
          apply_name: '',
          apply_dob: '',
          apply_m_status: '',
          apply_gender: '',
          apply_cellno: '',
          apply_p_address: '',
          apply_c_address: '',
          apply_cnic: '',
          apply_resp: '',
          apply_study_status: '',
          apply_degree: '',
          apply_institute: '',
          apply_experience: '',
          apply_exp_salary: '',
          // hearing_source: '',
          cv_pdf: null
        };
        state.successMessage = '';
        state.errorMessage = '';
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(submitCareerForm.pending, (state) => {
          state.loading = true;
          state.errorMessage = '';
          state.successMessage = '';
        })
        .addCase(submitCareerForm.fulfilled, (state) => {
          state.loading = false;
          state.successMessage = "Application submitted successfully!";
          state.errorMessage = '';
        })
        .addCase(submitCareerForm.rejected, (state, action) => {
          state.loading = false;
          state.errorMessage = action.payload || 'Failed to submit application';
        });
    }
  });
  
  export const { updateField, clearForm } = careerApplicationSlice.actions;
  export default careerApplicationSlice.reducer;