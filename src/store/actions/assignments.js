import axios from "axios";
import * as actionTypes from "./actionTypes";

const getASNTListStart = () => {
  return {
    type: actionTypes.GET_ASSIGNMENT_LIST_START
  };
};

const getASNTListSuccess = assignments => {
  return {
    type: actionTypes.GET_ASSIGNMENTS_LIST_SUCCESS,
    assignments
  };
};

const getASNTListFail = error => {
  return {
    type: actionTypes.GET_ASSIGNMENTS_LIST_FAIL,
    error: error
  };
};

export const getASNTS = token => {
  return dispatch => {
    dispatch(getASNTListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get("http://127.0.0.1:8000/assignments/")
      .then(res => {
        const assignments = res.data;
        dispatch(getASNTListSuccess(assignments));
      })
      .catch(err => {
        dispatch(getASNTListFail());
      });
  };
};

const getASNTDetailStart = () => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_START
  };
};

const getASNTDetailSuccess = assignment => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_SUCCESS,
    assignment
  };
};

const getASNTDetailFail = error => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_FAIL,
    error: error
  };
};

export const getASNTSDetail = (token, id) => {
  return dispatch => {
    dispatch(getASNTDetailStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/assignments/${id}/`)
      .then(res => {
        const assignment = res.data;
        dispatch(getASNTDetailSuccess(assignment));
      })
      .catch(err => {
        dispatch(getASNTDetailFail());
      });
  };
};

const createASNTStart = () => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_START
  };
};

const createASNTSuccess = assignment => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_SUCCESS,
    assignment
  };
};

const createASNTFail = error => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_FAIL,
    error: error
  };
};

export const createASNT = (token, asnt) => {
  return dispatch => {
    dispatch(createASNTStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .post(`http://127.0.0.1:8000/assignments/`, asnt)
      .then(res => {
        dispatch(createASNTSuccess());
      })
      .catch(err => {
        dispatch(createASNTFail());
      });
  };
};
