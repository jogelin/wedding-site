import * as kadolog from "./kadolog.actions";
import * as guest from "../guest/guest.actions";
import {Kado, KadologShowType} from "./kadolog.model";

export interface State {
    kadolog: Kado[];
    show: KadologShowType;
}

export const initialState: State = {
    kadolog: [],
    show: KadologShowType.SAVE_FORM
};

export function reducer(state = initialState, action: kadolog.Actions | guest.Actions): State {

    switch (action.type) {

        case kadolog.ActionTypes.LOAD_LIST_SUCCESS: {
            return Object.assign({}, state, {
                kadolog: action.payload
            });
        }

        case kadolog.ActionTypes.SHOW: {
            return Object.assign({}, state, {
                show: action.payload as KadologShowType
            });
        }

        case guest.ActionTypes.UPDATE_KADO_PARTICIPATION_SUCCESS: {
            return Object.assign({}, state, {
                show: KadologShowType.DONE
            });
        }

        case kadolog.ActionTypes.LOAD_LIST_FAIL: {
            console.error(action.type);
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getKadolog = (state: State) => state.kadolog;
export const show = (state: State) => state.show;
