import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "../utility/dataReducer";

const allReducers = combineReducers({
  users: dataReducer,
});

export default allReducers;
