import * as rsvp from "./rsvp.actions";
import * as guest from "../guest/guest.actions";

export enum RsvpShowType {
    LOAD_FORM, SAVE_FORM, DONE
}

export interface State {
    show: RsvpShowType;
}

export const initialState: State = {
    show: RsvpShowType.SAVE_FORM
};

export function reducer(state = initialState, action: rsvp.Actions | guest.Actions): State {

    switch (action.type) {

        case rsvp.ActionTypes.SHOW: {
            return  {
                show: action.payload as RsvpShowType
            };
        }

        case guest.ActionTypes.SAVE_SUCCESS_RSVP:
        case guest.ActionTypes.LOAD_SUCCESS: {
            return  {
                show: RsvpShowType.DONE
            };
        }

        default: {
            return state;
        }
    }
}

export const isEditing = (state: State) => state.show;
