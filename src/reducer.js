import {USERS} from './action'; 

const initialState={
    users : []
}

const reducer =(state= initialState, action) =>{
    const{type,payload} = action;

    switch(type){

        case  USERS  :{
return{...state, users:{...state.users, payload}}

        }

        // return state;
    }
}

export default reducer;