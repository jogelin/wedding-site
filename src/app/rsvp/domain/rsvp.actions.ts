import {Action} from "@ngrx/store";
import {type} from "../../shared/util";
import {Rsvp} from "./rsvp.model";

export const ActionTypes = {
    LOAD: type('[Rsvp] Load'),
    LOAD_SUCCESS: type('[Rsvp] Load success'),
    LOAD_FAIL: type('[Rsvp] Load Fail'),
    SAVE: type('[Rsvp] Load success'),
    SAVE_SUCCESS: type('[Rsvp] Load success'),
    SAVE_FAIL: type('[Rsvp] Load Fail')
};

export class LoadAction implements Action {
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

export class SaveAction implements Action {
    type = ActionTypes.SAVE;
    payload;

    constructor() {
    }
}

export class SaveSuccessAction implements Action {
    type = ActionTypes.SAVE_SUCCESS;

    constructor(public payload: Rsvp) {
    }
}

export class SaveFailAction implements Action {
    type = ActionTypes.SAVE_FAIL;

    constructor(public payload: any) {
    }
}
export type Actions
    = LoadAction
    | LoadSuccessAction
    | LoadFailAction
    | SaveAction
    | SaveSuccessAction
    | SaveFailAction;
