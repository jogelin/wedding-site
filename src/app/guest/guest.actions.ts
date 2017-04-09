import {Action} from "@ngrx/store";
import {type} from "../shared/util";
import {Guest} from "./guest.model";
import {Kado} from "../kadolog/kadolog.model";

export const ActionTypes = {
    LOAD_FROM_LOCAL: type('[Guest] Load From Local'),
    LOAD_FROM_EMAIL: type('[Guest] Load From Email'),
    LOAD_SUCCESS: type('[Guest] Load success'),
    LOAD_FAIL: type('[Guest] Load Fail'),
    LOAD_LIST: type('[Guest] Load List'),
    LOAD_LIST_SUCCESS: type('[Guest] Load List success'),
    LOAD_LIST_FAIL: type('[Guest] Load List Fail'),
    SAVE_RSVP: type('[Guest] Rsvp Save'),
    SAVE_SUCCESS_RSVP: type('[Guest] Save Rsvp success'),
    SAVE_FAIL_RSVP: type('[Guest] Save Rsvp Fail'),
    UPDATE_KADO_PARTICIPATION: type('[Guest] Update Kado Participation'),
    UPDATE_KADO_PARTICIPATION_SUCCESS: type('[Guest] Update Kado Participation success'),
    UPDATE_KADO_PARTICIPATION_FAIL: type('[Guest] Update Kado Participation Fail')
};

export class LoadFromLocalAction implements Action {
    type = ActionTypes.LOAD_FROM_LOCAL;
    payload;

    constructor() {
    }
}

export class LoadFromEmailAction implements Action {
    type = ActionTypes.LOAD_FROM_EMAIL;

    constructor(public payload: string) {
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
export class UpdateKadoParticipationAction implements Action {
    type = ActionTypes.UPDATE_KADO_PARTICIPATION;

    constructor(public payload: Kado[]) {
    }
}

export class UpdateKadoParticipationSuccessAction implements Action {
    type = ActionTypes.UPDATE_KADO_PARTICIPATION_SUCCESS;

    constructor(public payload: string) {
    }
}

export class UpdateKadoParticipationFailAction implements Action {
    type = ActionTypes.UPDATE_KADO_PARTICIPATION_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions
    = LoadFromLocalAction
    | LoadSuccessAction
    | LoadFailAction
    | LoadListAction
    | LoadListSuccessAction
    | LoadListFailAction
    | SaveRsvpAction
    | SaveSuccessRsvpAction
    | SaveFailRsvpAction
    | UpdateKadoParticipationAction
    | UpdateKadoParticipationSuccessAction
    | UpdateKadoParticipationFailAction;
