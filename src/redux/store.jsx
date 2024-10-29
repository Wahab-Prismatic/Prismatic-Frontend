import { configureStore } from "@reduxjs/toolkit";
import  blogReducer  from "./slices/blogSlice";
import contactFormReducer from "./slices/contactFormSlice";
import careerApplicationReducer from './slices/careerFormSlice';

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        contactForm: contactFormReducer,
        careerForm: careerApplicationReducer,
    },
});

export default store;