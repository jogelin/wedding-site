import {Action} from "@ngrx/store";
import {type} from "./util";

export abstract class GenericActionTypes<T> {
    static LOAD= type<T>('[Rsvp] Load');
    static LOAD_SUCCESS= type('[Rsvp] Load success');
    static LOAD_FAIL= type('[Rsvp] Load Fail');
    static UPDATE= type('[Rsvp] Load success');
    static UPDATE_SUCCESS= type('[Rsvp] Load success');
    static UPDATE_FAIL= type('[Rsvp] Load Fail');
};

export class LoadAction implements Action {
    type = GenericActionTypes.LOAD;
    payload;

    constructor() {
    }
}

export class LoadSuccessAction<T> implements Action {
    type = GenericActionTypes.LOAD_SUCCESS;

    constructor(public payload: T) {
    }
}

export class LoadFailAction implements Action {
    type = GenericActionTypes.LOAD_FAIL;

    constructor(public payload: any) {
    }
}
export class UpdateAction<T> implements Action {
    type = GenericActionTypes.LOAD;

    constructor(public payload: T) {
    }
}

export class UpdateSuccessAction<T> implements Action {
    type = GenericActionTypes.LOAD_SUCCESS;

    constructor(public payload: T) {
    }
}

export class UpdateFailAction implements Action {
    type = GenericActionTypes.LOAD_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions<T>
    = LoadAction
    | LoadSuccessAction<T>
    | LoadFailAction
    | UpdateAction<T>
    | UpdateSuccessAction<T>
    | UpdateFailAction;
