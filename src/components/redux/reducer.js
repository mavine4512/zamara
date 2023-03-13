import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const INITIAL_STATE = {
  user: null,
  notification: 0,
  deviceDimension: {},
};

function defaultReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_NOTIFICATION":
      return { ...state, notification: action.payload };
    case "ADD_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducer = combineReducers({ appState: defaultReducer });
export default persistReducer(persistConfig, reducer);
