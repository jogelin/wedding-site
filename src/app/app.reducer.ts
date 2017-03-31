import {ActionReducer, combineReducers} from "@ngrx/store";
import {environment} from "../environments/environment";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import * as fromGuest from "./guest/guest.reducer";
import * as fromScope from "./scope/scope.reducer";
import {createSelector} from "reselect";

export interface State {
    guest: fromGuest.State;
    scope: fromScope.State;
}

const reducers = {
    guest: fromGuest.reducer,
    scope: fromScope.reducer,
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
export const getGuestState = (state: State) => state.guest;

export const getGuests = createSelector(getGuestState, fromGuest.getGuests);
export const getCurrentKey = createSelector(getGuestState, fromGuest.getCurrentKey);
export const getCurrentGuest = createSelector(getGuests, getCurrentKey, (guests, currentKey) => {
    const filter = (guest) => guest.$key === currentKey;
    return guests.some(filter) ? guests.filter(filter)[0]:null;
});
export const isEditing = createSelector(getGuestState, fromGuest.isEditing);

//SCOPE
export const getScopeState = (state: State) => state.scope;

export const getScope = createSelector(getScopeState, fromScope.getScope);
export const isTadaaam = createSelector(getScope, (scope) => scope === 'tadaaam');
export const isTadaam = createSelector(getScope, isTadaaam, (scope, isTadaaam) => isTadaaam || scope === 'tadaam');
export const isTadam = createSelector(getScope,isTadaam, (scope, isTadaam) => isTadaam || scope === 'tadam');

//KADOLOG
// export const getKadologState = (state: State) => state.guest;
//
// export const getKadologs = createSelector(getKadologState, fromKadolog.getKadologs);
// export const getCurrentKadolog = createSelector(getKadologState, fromKadolog.getCurrentRsvpEmail);
