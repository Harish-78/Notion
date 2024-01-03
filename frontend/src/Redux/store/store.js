import rootReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(rootReducer);

export default store;
