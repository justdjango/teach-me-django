import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  assignments: [],
  error: null,
  loading: false
};

const getGradedASNTListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getGradedASNTListSuccess = (state, action) => {
  return updateObject(state, {
    assignments: action.assignments,
    error: null,
    loading: false
  });
};

const getGradedASNTListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GRADED_ASSIGNMENT_LIST_START:
      return getGradedASNTListStart(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENTS_LIST_SUCCESS:
      return getGradedASNTListSuccess(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENTS_LIST_FAIL:
      return getGradedASNTListFail(state, action);
    default:
      return state;
  }
};

export default reducer;
