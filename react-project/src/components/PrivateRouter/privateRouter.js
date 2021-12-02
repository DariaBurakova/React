import {useSelector} from "react-redux";
import {selectAuth} from "../../store/profile/selector";
import {Navigate} from "react-router-dom";

export const PrivateRouter=({children})=>{
    const authed=useSelector(selectAuth)
    return authed ? children:<Navigate to="/" replace />;
}