import {Action} from "@ngrx/store";
import {type} from "../../shared/util";

const ActionTypes = {
    LOAD: type('[Report] Load'),
    LOAD_SUCCESS: type('[Report] Load success'),
    LOAD_FAIL: type('[Report] Load Fail'),
    REFRESH_COUNT: type('[Report] Refresh count'),
    REFRESH_COUNT_SUCCESS: type('[Report] Refresh count success'),
    REFRESH_COUNT_FAIL: type('[Report] Refresh count Fail')
};
export {ActionTypes as ReportActionTypes};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;
    payload;

    constructor() {
    }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: Report) {
    }
}

export class LoadFailAction implements Action {
    type = ActionTypes.LOAD_FAIL;

    constructor(public payload: any) {
    }
}

export class RefreshCountAction implements Action {
    type = ActionTypes.REFRESH_COUNT;
    payload;

    constructor() {
    }
}

export class RefreshCountSuccessAction implements Action {
    type = ActionTypes.REFRESH_COUNT_SUCCESS;

    constructor(public payload: ReportCountRefresh[]) {
    }
}

export class RefreshCountFailAction implements Action {
    type = ActionTypes.REFRESH_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

export type ReportActions
    = LoadAction
    | LoadSuccessAction
    | LoadFailAction
    | RefreshCountAction
    | RefreshCountSuccessAction
    | RefreshCountFailAction;
