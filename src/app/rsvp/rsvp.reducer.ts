import * as rsvp from "./rsvp.actions";
import * as guest from "../guest/guest.actions";

export interface State {
    editing: boolean;
}

export const initialState: State = {
    editing: true
};

export function reducer(state = initialState, action: rsvp.Actions | guest.Actions): State {

    switch (action.type) {

        case rsvp.ActionTypes.EDIT: {
            return Object.assign({}, state, {
                editing: true
            });
        }

        case guest.ActionTypes.SAVE_SUCCESS_RSVP:
        case guest.ActionTypes.LOAD_SUCCESS: {
            return Object.assign({}, state, {
                editing: false
            });
        }

        default: {
            return state;
        }
    }
}

export const isEditing = (state: State) => state.editing;
