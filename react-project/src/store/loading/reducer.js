import {Statuses} from "../../utils/variable";
import {LOADING_ERROR_ACTION, LOADING_SUCCESS_ACTION, LOADING_UPLOADED_ACTION} from "./action";

const articlesState={
    articleList:[],
    request:{
        status:Statuses.IDLE,
        error: ''
    }
};

export const loadingArticles=(state=articlesState,{payload,type})=>{
switch (type){
    case LOADING_UPLOADED_ACTION:
        return{
        ...state,
            request: {
            ...state.request,
                status:Statuses.REQUEST
            }
        }
    case LOADING_ERROR_ACTION:
        return{
            ...state,
            request: {
                error: payload,
                status: Statuses.FAILURE
            }

        }
    case LOADING_SUCCESS_ACTION:
        return {
        ...state,
            articleList:payload,
            request: {
            error: '',
                status:Statuses.SUCCESS
            }
        }
    default:
        return state
}
}
