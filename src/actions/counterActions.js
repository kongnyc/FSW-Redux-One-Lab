import { INCREMENT, DECREMENT,RESET} from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};
export const resetState = () => {
  return { type: RESET };
};
