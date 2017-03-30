import {ActionReducer, combineReducers} from "@ngrx/store";
import {environment} from "../environments/environment";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import * as fromRsvp from "./rsvp/domain/rsvp.reducer";
import * as fromKadolog from "./kadolog/domain/kadolog.reducer";
import {createSelector} from "reselect";

export interface State {
    rsvp: fromRsvp.State;
    filter: fromKadolog.State;
}

const reducers = {
    guest: fromRsvp.reducer,
    filter: fromKadolog.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

//RSVP
export const getRsvpState = (state: State) => state.rsvp;

export const getRsvps = createSelector(getRsvpState, fromRsvp.getRsvps);
export const getCurrentRsvp = createSelector(getRsvpState, fromRsvp.getCurrentRsvp);
export const hasRsvp = createSelector(fromRsvp.getCurrentRsvp, (rsvp) => rsvp != null);

//KADOLOG
// export const getKadologState = (state: State) => state.rsvp;
//
// export const getKadologs = createSelector(getKadologState, fromKadolog.getKadologs);
// export const getCurrentKadolog = createSelector(getKadologState, fromKadolog.getCurrentRsvp);
