import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { thunk as reduxThunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
