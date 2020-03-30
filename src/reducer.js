import { UPDATE_USERS } from './action';

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case UPDATE_USERS: {
            return { ...state, users: [...state.users, payload] }

        }

        default: return state;
    }
}

export default reducer;