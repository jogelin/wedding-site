import {Actions, ActionTypes} from "./guest.actions";
import {Guest} from "./guest.model";


export interface State {
    guests: Guest[];
    currentKey: string;
}

export const initialState: State = {
    guests: [],
    currentKey: null
};

export function reducer(state = initialState, action: Actions): State {

    switch (action.type) {

        case ActionTypes.LOAD_SUCCESS: {
            return Object.assign({}, state, {
                currentKey: action.payload
            });
        }

        case ActionTypes.LOAD_LIST_SUCCESS: {
            return Object.assign({}, state, {
                guests: action.payload
            });
        }

        case ActionTypes.SAVE_SUCCESS_RSVP: {
            return Object.assign({}, state, {
                currentKey: action.payload
            });
        }

        case ActionTypes.LOAD_FAIL:
        case ActionTypes.LOAD_LIST_FAIL:
        case ActionTypes.SAVE_FAIL_RSVP: {
            console.error(action.type);
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getGuests = (state: State) => state.guests;
export const getCurrentKey = (state: State) => state.currentKey;
