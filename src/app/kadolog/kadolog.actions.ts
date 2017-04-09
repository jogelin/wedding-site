import {Action} from "@ngrx/store";
import {type} from "../shared/util";
import {Kado} from "./kadolog.model";

export const ActionTypes = {
    LOAD_LIST: type('[Kadolog] Load List'),
    LOAD_LIST_SUCCESS: type('[Kadolog] Load List success'),
    LOAD_LIST_FAIL: type('[Kadolog] Load List Fail'),
    SHOW: type('[Kadolog] Edit')
};

export class LoadListAction implements Action {
    type = ActionTypes.LOAD_LIST;
    payload;

    constructor() {
    }
}

export class LoadListSuccessAction implements Action {
    type = ActionTypes.LOAD_LIST_SUCCESS;

    constructor(public payload: Kado[]) {
    }
}

export class LoadListFailAction implements Action {
    type = ActionTypes.LOAD_LIST_FAIL;

    constructor(public payload: any) {
    }
}

export class EditAction implements Action {
    type = ActionTypes.SHOW;
    payload;

    constructor() {
    }
}

export type Actions
    = LoadListAction
    | LoadListSuccessAction
    | LoadListFailAction
    | EditAction;
