import { combineReducers } from "redux";
import auth from "./auth";
import club from "./club";

export default combineReducers({
    auth, club
})