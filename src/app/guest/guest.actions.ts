import {Action} from "@ngrx/store";
import {type} from "../shared/util";
import {Guest} from "./guest.model";

export const ActionTypes = {
    LOAD: type('[Guest] Load'),
    LOAD_SUCCESS: type('[Guest] Load success'),
    LOAD_FAIL: type('[Guest] Load Fail'),
    LOAD_LIST: type('[Guest] Load List'),
    LOAD_LIST_SUCCESS: type('[Guest] Load List success'),
    LOAD_LIST_FAIL: type('[Guest] Load List Fail'),
    SAVE: type('[Guest] Save'),
    SAVE_SUCCESS: type('[Guest] Save success'),
    SAVE_FAIL: type('[Guest] Save Fail'),
    EDIT: type('[Guest] Edit')
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
    payload

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

export class SaveAction implements Action {
    type = ActionTypes.SAVE;

    constructor(public payload: Guest) {
    }
}

export class SaveSuccessAction implements Action {
    type = ActionTypes.SAVE_SUCCESS;

    constructor(public payload: string) {
    }
}

export class SaveFailAction implements Action {
    type = ActionTypes.SAVE_FAIL;

    constructor(public payload: any) {
    }
}

export class EditAction implements Action {
    type = ActionTypes.EDIT;
    payload;

    constructor() {
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
    | SaveFailAction
    | EditAction;
