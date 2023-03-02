import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantReducer";

//reducer
const reducers=combineReducers({
restaurantReducer:restaurantListReducer                //key value pair as it is inside an object tag{}......data comes to store when you define reducer
})

//middleware
const middleware=[thunk]


//create store
const store=createStore(reducers,applyMiddleware(...middleware))    // ... is called spread operator which is used... when there are more than one middleware.. all of them will be added


export default store