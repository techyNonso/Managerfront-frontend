import { GET_PRICE_LIST, GET_PRICE } from "./types";
import axiosInstance from "Modules/axiosInstance";

export const getPriceList = () => (dispatch) => {
  axiosInstance
    .get(`prices/`)
    .then((res) =>
      dispatch({
        type: GET_PRICE_LIST,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err.message));
};

export const getPrice = (id) => (dispatch) => {
  //console.log(id);
  axiosInstance
    .get(`price/${id}/`)
    .then((res) => {
      dispatch({
        type: GET_PRICE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
