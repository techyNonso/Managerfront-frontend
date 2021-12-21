import { GET_ALL_STAFF, GET_STAFF } from "./types";
import axios from "axios";
import axiosInstance from "Modules/axiosInstance";

export const getAllStaff = (company, branch) => (dispatch) => {
  // console.log(company);
  axiosInstance
    .get(`staff/company/${company}/${branch}/`)
    .then((res) =>
      dispatch({
        type: GET_ALL_STAFF,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getStaff = (id) => (dispatch) => {
  //console.log(id);
  axiosInstance
    .get(`staff/${id}/`)
    .then((res) =>
      dispatch({
        type: GET_STAFF,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
