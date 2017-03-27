import {Action} from "@ngrx/store";
import {GenericActionTypes} from "../../shared/generic.actions";

export class RsvpActionTypes extends GenericActionTypes<Rsvp> {

}

export class RsvpLoadAction implements Action {
    type = ActionTypes.LOAD;
    payload;

    constructor() {
    }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: Rsvp) {
    }
}

export class LoadFailAction implements Action {
    type = ActionTypes.LOAD_FAIL;

    constructor(public payload: any) {
    }
}

export type RsvpActions
    = LoadAction
    | LoadSuccessAction
    | LoadFailAction;
