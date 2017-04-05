import {Action} from "@ngrx/store";
import {type} from "../shared/util";

export const ActionTypes = {
    EDIT: type('[Rsvp] Edit')
};

export class EditAction implements Action {
    type = ActionTypes.EDIT;
    payload;

    constructor() {
    }
}

export type Actions
    = EditAction;
