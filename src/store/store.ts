import { createStore } from "redux";
import calcReducer from "./reducers";

export const store = createStore(calcReducer);
export type RootState = ReturnType<typeof calcReducer>;