import {Action} from "@ngrx/store";
import {type} from "../../shared/util";
import {Rsvp} from "./rsvp.model";

export const ActionTypes = {
    LOAD: type('[Rsvp] Load'),
    LOAD_SUCCESS: type('[Rsvp] Load success'),
    LOAD_FAIL: type('[Rsvp] Load Fail'),
    LOAD_LIST: type('[Rsvp] Load List'),
    LOAD_LIST_SUCCESS: type('[Rsvp] Load List success'),
    LOAD_LIST_FAIL: type('[Rsvp] Load List Fail'),
    SAVE: type('[Rsvp] Save'),
    SAVE_SUCCESS: type('[Rsvp] Save success'),
    SAVE_FAIL: type('[Rsvp] Save Fail')
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor(public payload: string) {
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

export class LoadListAction implements Action {
    type = ActionTypes.LOAD_LIST;
    payload;

    constructor() {
    }
}

export class LoadListSuccessAction implements Action {
    type = ActionTypes.LOAD_LIST_SUCCESS;

    constructor(public payload: Rsvp[]) {
    }
}

export class LoadListFailAction implements Action {
    type = ActionTypes.LOAD_LIST_FAIL;

    constructor(public payload: any) {
    }
}

export class SaveAction implements Action {
    type = ActionTypes.SAVE;

    constructor(public payload: Rsvp) {
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
    | LoadListAction
    | LoadListSuccessAction
    | LoadListFailAction
    | SaveAction
    | SaveSuccessAction
    | SaveFailAction;
