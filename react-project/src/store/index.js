 import {createStore, combineReducers, applyMiddleware, compose} from "redux";
 import {profileReducer} from "./profile/reducer";
 import {listChatReducer} from "./listChat/reducer";
 import {chatsStateReducer} from "./chats/reducer";
 import thunk from "redux-thunk";
 import  storage from 'redux-persist/lib/storage'
 import { persistStore,persistReducer } from 'redux-persist';
 import {loadingArticles} from "./loading/reducer";

 const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const persistConfig={
     key:'root',
         storage,
 }
 const rootReducer=combineReducers({
         profile:profileReducer,
         listChats:listChatReducer,
         chats:chatsStateReducer,
     loading:loadingArticles,
     })
 const persistedReducer=persistReducer(persistConfig,rootReducer)

 export const store=createStore(
     persistedReducer,
     composeEnhancers(applyMiddleware(thunk))
     );
 export const persistor = persistStore(store);