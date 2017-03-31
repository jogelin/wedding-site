import {Actions, ActionTypes} from "./scope.actions";


export interface State {
    scope: string;
}

export const initialState: State = {
    scope: null
};

export function reducer(state = initialState, action: Actions): State {

    switch (action.type) {

        case ActionTypes.UPDATE_SUCCESS: {
            return {
                scope: action.payload,
            };
        }

        case ActionTypes.UPDATE_FAIL: {
            console.error(action.type);
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getScope = (state: State) => state.scope;
