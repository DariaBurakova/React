import {LOADING_UPLOADED_ACTION, loadingUploadedAction, loadingArticlesThunk, loadingErrorAction} from "../action"
import {LOADING_SUCCESS_ACTION,loadingSuccessAction} from "../action"

describe('loadingUploadedAction',()=>{
it("return object with type",()=>{
    const expected={
        type:LOADING_UPLOADED_ACTION,
    };
    const received=loadingUploadedAction()
    expect(received).toEqual(expected)
})
})

describe('loadingSuccessAction',()=>{
    it("return object with type",()=>{
        const payload=[]
        const expected={
            type:LOADING_SUCCESS_ACTION,
            payload
        };
        const received=loadingSuccessAction(payload)
        expect(received).toEqual(expected)
    })
})



describe('loadingArticlesThunk',()=>{
    it('dispatch loadingUploadedAction',()=>{
       const mockDispatch = jest.fn();
        loadingArticlesThunk()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(loadingUploadedAction())
    });
    it('dispatch action on fetch',async()=>{
        const result={articles:[]}
        fetch.mockResponseOnce(JSON.stringify(result))
        const mockDispatch = jest.fn();
        await loadingArticlesThunk()(mockDispatch)
        expect(mockDispatch).toHaveBeenLastCalledWith(loadingSuccessAction(result));
    });
    it("dispatch on error in fetch", async () => {
        fetch.mockRejectOnce(new Error('test'));
        const mockDispatch = jest.fn();
        await loadingArticlesThunk()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(loadingErrorAction('test'));
    });
})