 import {createStore,combineReducers} from "redux";
 import {profileReducer} from "./profile/reducer";
 import {listChatReducer} from "./listChat/reducer";
 import {chatsStateReducer} from "./chats/reducer";

 export const store=createStore(
     combineReducers({
      profile:profileReducer,
     listChats:listChatReducer,
         chats:chatsStateReducer,
     }),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );