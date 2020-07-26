import thunk from "redux-thunk";
import { compose, applyMiddleware, createStore } from "redux";
import rootReducer from './reducers/rootReducer';

const initialState = {
  products: [],
};

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
