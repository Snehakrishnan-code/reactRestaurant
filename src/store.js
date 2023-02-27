import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";

//reducer
const reducers=combineReducers({

})

//middleware
const middleware=[thunk]


//create store
const store=createStore(reducers,applyMiddleware(...middleware))    // ... is called spreadoperator which is used... when there are more than one middleware.. all of them will be added


export default store