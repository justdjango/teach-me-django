import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  username: null,
  is_student: null,
  is_teacher: null,
  userId: null,
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.user.token,
    username: action.user.username,
    is_student: action.user.is_student,
    is_teacher: action.user.is_teacher,
    userId: action.user.userId,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
