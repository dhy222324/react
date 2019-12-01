import {createStore,applyMiddleware} from "redux";
import {combineReducers} from "redux-immutable";
import thunk from "redux-thunk";

import indexReducer from "@/components/main/index/indexReducer";
import listReducer from "@/components/main/list/reducer";

const store=combineReducers({
    indexReducer,
    listReducer
})

export default createStore(store,applyMiddleware(thunk));