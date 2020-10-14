import { combineReducers } from "redux";
import {
  CHANGE_THEME,
  DECREMENT,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  INCREMENT,
} from "./types";

function counterReducer(counterState = 0, action) {
  if (action.type === INCREMENT) {
    return counterState + 1;
  } else if (action.type === DECREMENT) {
    return counterState - 1;
  }

  return counterState;
}

const initialThemeState = {
  value: "light",
  disabled: false,
};

function themeReducer(themeState = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...themeState, value: action.payload };
    case ENABLE_BUTTONS:
      return { ...themeState, disabled: false };
    case DISABLE_BUTTONS:
      return { ...themeState, disabled: true };

    default:
      return themeState;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
