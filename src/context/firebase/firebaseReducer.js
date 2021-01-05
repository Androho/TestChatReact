import {ADD_MESSAGE, FETCH_MESSAGE, SHOW_LOADER} from "../types";

const handlers={
    [SHOW_LOADER]:state =>({...state,loading:true}),
    [ADD_MESSAGE]:(state,{...payload})=> ({...state,
    messages:[...state.messages, payload]}),
    [FETCH_MESSAGE]:(state, {payload})=>({...state,messages:payload,loading:false}),
    DEFAULT:state=>state
}
export const firebaseReducer=(state,action)=>{
    const handle=handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}
