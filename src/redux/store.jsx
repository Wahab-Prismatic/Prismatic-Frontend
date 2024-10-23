import { configureStore } from "@reduxjs/toolkit";
import  blogReducer  from "./slices/blogSlice";
import contactFormReducer from "./slices/contactFormSlice";

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        contactForm: contactFormReducer,
    },
});

export default store;