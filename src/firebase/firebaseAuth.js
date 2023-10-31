import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from ''

const auth = getAuth();

export function login (email, password){
 return signInWithEmailAndPassword(auth, email, password)
}

export function cadastrar (email, password) {
    return createUserWithEmailAndPassword (auth, email, password)
}