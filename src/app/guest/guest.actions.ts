import {Action} from "@ngrx/store";
import {type} from "../shared/util";
import {Guest} from "./guest.model";
import {Kado} from "../kadolog/kadolog.model";

export const ActionTypes = {
    LOAD: type('[Guest] Load'),
    LOAD_SUCCESS: type('[Guest] Load success'),
    LOAD_FAIL: type('[Guest] Load Fail'),
    LOAD_LIST: type('[Guest] Load List'),
    LOAD_LIST_SUCCESS: type('[Guest] Load List success'),
    LOAD_LIST_FAIL: type('[Guest] Load List Fail'),
    SAVE_RSVP: type('[Guest] Rsvp Save'),
    SAVE_SUCCESS_RSVP: type('[Guest] Save Rsvp success'),
    SAVE_FAIL_RSVP: type('[Guest] Save Rsvp Fail'),
    SAVE_KADOLOG: type('[Guest] Kadolog Save'),
    SAVE_SUCCESS_KADOLOG: type('[Guest] Save Kadolog success'),
    SAVE_FAIL_KADOLOG: type('[Guest] Save Kadolog Fail')
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;
    payload;

    constructor() {
    }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: string | null) {
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

    constructor(public payload: Guest[]) {
    }
}

export class LoadListFailAction implements Action {
    type = ActionTypes.LOAD_LIST_FAIL;

    constructor(public payload: any) {
    }
}

export class SaveRsvpAction implements Action {
    type = ActionTypes.SAVE_RSVP;

    constructor(public payload: Guest) {
    }
}

export class SaveSuccessRsvpAction implements Action {
    type = ActionTypes.SAVE_SUCCESS_RSVP;

    constructor(public payload: string) {
    }
}

export class SaveFailRsvpAction implements Action {
    type = ActionTypes.SAVE_FAIL_RSVP;

    constructor(public payload: any) {
    }
}
export class SaveKadologAction implements Action {
    type = ActionTypes.SAVE_RSVP;

    constructor(public payload: Kado[]) {
    }
}

export class SaveSuccessKadologAction implements Action {
    type = ActionTypes.SAVE_SUCCESS_RSVP;

    constructor(public payload: string) {
    }
}

export class SaveFailKadologAction implements Action {
    type = ActionTypes.SAVE_FAIL_RSVP;

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
    | SaveRsvpAction
    | SaveSuccessRsvpAction
    | SaveFailRsvpAction
    | SaveKadologAction
    | SaveSuccessKadologAction
    | SaveFailKadologAction;
