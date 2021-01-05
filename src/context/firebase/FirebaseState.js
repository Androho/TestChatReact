import React, {useReducer} from 'react'
import axios from 'axios'
import {FirebaseContext} from "./firebaseContext"
import {firebaseReducer} from "./firebaseReducer"
import {FETCH_MESSAGE, SHOW_LOADER} from "../types";
import fire from "../../config/firebase";


const url = "https://testchat-c27fe.firebaseio.com"

export const FirebaseState = ({children}) => {
    const initialState = {
        messages: [],
        loading: false,
        user: null
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    initialState.setState({user});
                    console.log("User info:" + user.toString())
                } else {
                    initialState.setState({user: null})
                }
            }
        )
    }
    const showLoader = () => dispatch({type: SHOW_LOADER})
    const fetchMessages = async () => {
        showLoader()
        const res = await axios.get(`${url}/messages.json`)
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch({type: FETCH_MESSAGE, payload})
    }
    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchMessages,
            loading: state.loading,
            messages: state.messages,
            user: state.user
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
