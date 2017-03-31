import {Action} from "@ngrx/store";
import {type} from "../shared/util";

export const ActionTypes = {
    UPDATE: type('[Scope] Update'),
    UPDATE_SUCCESS: type('[Scope] Update success'),
    UPDATE_FAIL: type('[Scope] Update Fail')
};

export class UpdateAction implements Action {
    type = ActionTypes.UPDATE;
    payload;
    constructor() {
    }
}

export class UpdateSuccessAction implements Action {
    type = ActionTypes.UPDATE_SUCCESS;

    constructor(public payload: string) {
    }
}

export class UpdateFailAction implements Action {
    type = ActionTypes.UPDATE_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions
    = UpdateAction
    | UpdateSuccessAction
    | UpdateFailAction;
