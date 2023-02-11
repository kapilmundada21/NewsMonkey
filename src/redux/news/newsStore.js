import { createStore } from "redux";
import { newsReducer } from "./newsReducer";

export const newsStore = createStore(newsReducer)