import {Action} from "@ngrx/store";
import {type} from "../shared/util";
import {RsvpShowType} from "./rsvp.reducer";

export const ActionTypes = {
    SHOW: type('[Rsvp] Show')
};

export class RsvpShowAction implements Action {
    type = ActionTypes.SHOW;

    constructor(public payload: RsvpShowType) {
    }
}

export type Actions
    = RsvpShowAction;
