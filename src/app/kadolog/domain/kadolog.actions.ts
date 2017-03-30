import {Action} from "@ngrx/store";
import {type} from "../../shared/util";
import {Kadolog} from "./kadolog.model";

export const ActionTypes = {
    LOAD: type('[Kadolog] Load'),
    LOAD_SUCCESS: type('[Kadolog] Load success'),
    LOAD_FAIL: type('[Kadolog] Load Fail'),
    SAVE: type('[Kadolog] Load success'),
    SAVE_SUCCESS: type('[Kadolog] Load success'),
    SAVE_FAIL: type('[Kadolog] Load Fail')
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;
    payload;

    constructor() {
    }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: Kadolog) {
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

    constructor(public payload: Kadolog) {
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
