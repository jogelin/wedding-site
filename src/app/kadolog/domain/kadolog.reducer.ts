import {Actions, ActionTypes} from "./kadolog.actions";
import {Kadolog} from "./kadolog.model";


export interface State {
    kadologs: Kadolog[];
    currentKadolog: Kadolog;
}

export const initialState: State = {
    kadologs: [],
    currentKadolog: null
};

export function reducer(state = initialState, action: Actions): State {

    switch (action.type) {
        case ActionTypes.LOAD_SUCCESS: {
            return Object.assign({}, state, {
                kadologs: action.payload
            });
        }

        case ActionTypes.LOAD_FAIL: {
            console.error(action.type);
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getKadologs = (state: State) => state.kadologs;
export const getCurrentKadolog = (state: State) => state.currentKadolog;
