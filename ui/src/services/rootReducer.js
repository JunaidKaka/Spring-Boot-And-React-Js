import { combineReducers } from "redux";
import EmployeeReducer from "./user/EmployeeReducer";

const rootReducer = combineReducers({
    user: EmployeeReducer,
});

export default rootReducer;