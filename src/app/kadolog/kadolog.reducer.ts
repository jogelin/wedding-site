import {Actions, ActionTypes} from "./kadolog.actions";
import {Kado, KadologShowType} from "./kadolog.model";

export interface State {
    kadolog: Kado[];
    show: KadologShowType;
}

export const initialState: State = {
    kadolog: [],
    show: KadologShowType.SAVE_FORM
};

export function reducer(state = initialState, action: Actions): State {

    switch (action.type) {

        case ActionTypes.LOAD_LIST_SUCCESS: {
            return Object.assign({}, state, {
                kadolog: action.payload
            });
        }

        case ActionTypes.SHOW: {
            return Object.assign({}, state, {
                show: action.payload as KadologShowType
            });
        }

        case ActionTypes.LOAD_LIST_FAIL: {
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
