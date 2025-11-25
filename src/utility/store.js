import allReducers from "../reducers/index"; // Your combined reducers
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: allReducers });

export default store;
