import * as UT from "./userTypes";
import axios from "axios";

const LOCAL_HOST = "http://localhost:8080"
const BASE = "/rest/api/"
const END_POINT = LOCAL_HOST + BASE;
const REGISTER_URL = "http://localhost:8080/rest/api/employee/";

export const fetchUsers = (page) => {
    return (dispatch) => {
        dispatch(userRequest());
        axios
            .get(
                `${END_POINT}/employee/findAll?page=${page}&size=5`
            )
            .then((response) => {
                dispatch(userSuccess(response.data.data.content));
            })
            .catch((error) => {
                dispatch(userFailure(error.message));
            });
    };
};

export const registerUser = (userObject) => async(dispatch) => {
    dispatch(userRequest());
    try {
        const response = await axios.post(REGISTER_URL, userObject);
        dispatch(userSavedSuccess(response.data));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
};

const userRequest = () => {
    return {
        type: UT.USER_REQUEST,
    };
};

const userSavedSuccess = (user) => {
    return {
        type: UT.USER_SAVED_SUCCESS,
        payload: user,
    };
};

const userSuccess = (users) => {
    return {
        type: UT.REQUEST_SUCCESS,
        payload: users,
    };
};

const userFailure = (error) => {
    return {
        type: UT.REQUEST_FAILURE,
        payload: error,
    };
};