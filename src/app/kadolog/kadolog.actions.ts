import {Action} from "@ngrx/store";
import {type} from "../shared/util";
import {Kado, KadologShowType} from "./kadolog.model";

export const ActionTypes = {
    LOAD_LIST: type('[Kadolog] Load List'),
    LOAD_LIST_SUCCESS: type('[Kadolog] Load List success'),
    LOAD_LIST_FAIL: type('[Kadolog] Load List Fail'),
    SHOW: type('[Kadolog] Show')
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

export class KadologShowAction implements Action {
    type = ActionTypes.SHOW;

    constructor(public payload: KadologShowType) {
    }
}

export type Actions
    = LoadListAction
    | LoadListSuccessAction
    | LoadListFailAction
    | KadologShowAction;
