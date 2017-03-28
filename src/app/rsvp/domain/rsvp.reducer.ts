import {Actions, ActionTypes} from "./rsvp.actions";
import {Rsvp} from "./rsvp.model";


export interface State {
    rsvps: Rsvp[];
    currentRsvp: Rsvp;
}

export const initialState: State = {
    rsvps: [],
    currentRsvp: null
};

export function reducer(state = initialState, action: Actions): State {

    switch (action.type) {
        case ActionTypes.LOAD_SUCCESS: {
            return Object.assign({}, state, {
                rsvps: action.payload
            });
        }

        case ActionTypes.LOAD_FAIL: {
            console.error(action.type);
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getRsvps = (state: State) => state.rsvps;
export const getCurrentRsvp = (state: State) => state.currentRsvp;
