import {url} from "../../utils/variable";

export const LOADING_UPLOADED_ACTION="LOADING::LOADING_UPLOADED_ACTION"
export const LOADING_ERROR_ACTION="LOADING::LOADING_ERROR_ACTION"
export const LOADING_SUCCESS_ACTION="LOADING::LOADING_SUCCESS_ACTION"

export const loadingUploadedAction=()=>({
    type:LOADING_UPLOADED_ACTION
});
export const loadingErrorAction=(error)=>({
    type:LOADING_ERROR_ACTION,
    payload:error
});
export const loadingSuccessAction=(articles)=>({
    type:LOADING_SUCCESS_ACTION,
    payload:articles
});

export const loadingArticlesThunk=()=>async(dispatch)=>{
    dispatch(loadingUploadedAction())
    try{
        const response= await fetch(url);
        if(!response.ok){
            throw new Error(': not loaded')
        }
        const result=await response.json()

        dispatch(loadingSuccessAction(result))
    }catch(error){
        console.log('error')
dispatch(loadingErrorAction(error.message))
    }
}
