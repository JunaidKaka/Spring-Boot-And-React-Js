import * as UT from "./userTypes";

const initialState = {
    users: [],
    error: "",
};

const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UT.USER_REQUEST:
            return {
                ...state,
            };
        case UT.REQUEST_SUCCESS:
            return {
                users: action.payload,
                error: "",
            };
        case UT.USER_SAVED_SUCCESS:
            return {
                message: action.payload,
                error: "",
            };
        case UT.REQUEST_FAILURE:
            return {
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default EmployeeReducer;