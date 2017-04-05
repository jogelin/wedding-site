import {Actions, ActionTypes} from "./kadolog.actions";
import {Kado} from "./kadolog.model";


export interface State {
    kadolog: Kado[];
    editing: boolean;
}

export const initialState: State = {
    kadolog: [],
    editing: true
};

export function reducer(state = initialState, action: Actions): State {

    switch (action.type) {

        case ActionTypes.LOAD_LIST_SUCCESS: {
            return Object.assign({}, state, {
                guests: action.payload
            });
        }

        case ActionTypes.EDIT: {
            return Object.assign({}, state, {
                editing: true
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
export const isEditing = (state: State) => state.editing;
