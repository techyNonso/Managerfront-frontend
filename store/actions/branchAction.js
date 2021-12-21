import { GET_BRANCHES, GET_BRANCH } from "./types";
import axios from "axios";
import axiosInstance from "Modules/axiosInstance";

export const getCompanyBranches = (company) => (dispatch) => {
  axiosInstance
    .get(`branches/${company}/`)
    .then((res) =>
      dispatch({
        type: GET_BRANCHES,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getBranch = (id) => (dispatch) => {
  //console.log(id);
  axiosInstance
    .get(`branches/branch/${id}/`)
    .then((res) =>
      dispatch({
        type: GET_BRANCH,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
