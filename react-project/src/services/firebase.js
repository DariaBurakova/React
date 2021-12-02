
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"
import {getDatabase,ref} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyCLGBcIafwQw6TZj1euNrPoTZFryHz8gXw",
    authDomain: "react-e28c2.firebaseapp.com",
    projectId: "react-e28c2",
    storageBucket: "react-e28c2.appspot.com",
    messagingSenderId: "765678062897",
    appId: "1:765678062897:web:cd46d1fdd59826ec83b410"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
 export  const signUp=async (email,password)=>await createUserWithEmailAndPassword(auth,email,password)
export  const logIn=async (email,password)=>await signInWithEmailAndPassword(auth,email,password)
export const logOut=async ()=>await signOut(auth)
export const database1=getDatabase(app)
export const userRef=ref(database1,'user')
export const chatsRef=ref(database1,'chats')
export const messageRef=ref(database1,'messages')
export const getChatRefById=(id)=>ref(database1,`chats/${id}`)
export const getChatMessageListRefById=(chatId)=>ref(database1,`messages/${chatId}/messageList`)
export const getChatMessageRefById=(chatId)=>ref(database1,`messages/${chatId}`)