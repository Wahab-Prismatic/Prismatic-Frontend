import { configureStore } from "@reduxjs/toolkit";
import  blogReducer  from "./slices/blogSlice";
import contactFormReducer from "./slices/contactFormSlice";
import careerApplicationReducer from './slices/careerFormSlice';
import careerReducer from './slices/CareerSlice';
import LoginReducer from './slices/auth/Login';

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        contactForm: contactFormReducer,
        careerForm: careerApplicationReducer,
        career: careerReducer,
        login: LoginReducer,
    },
});

export default store;