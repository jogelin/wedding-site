import {ActionReducer, combineReducers} from "@ngrx/store";
import {environment} from "../environments/environment";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import * as fromGuest from "./guest/guest.reducer";
import * as fromScope from "./scope/scope.reducer";
import * as fromRsvp from "./rsvp/rsvp.reducer";
import * as fromKadolog from "./kadolog/kadolog.reducer";
import {createSelector} from "reselect";
import {GuestKado} from "./guest/guest.model";

export interface State {
    guest: fromGuest.State;
    scope: fromScope.State;
    rsvp: fromRsvp.State;
    kadolog: fromKadolog.State;
}

const reducers = {
    guest: fromGuest.reducer,
    scope: fromScope.reducer,
    rsvp: fromRsvp.reducer,
    kadolog: fromKadolog.reducer,
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

//SCOPE
export const getScopeState = (state: State) => state.scope;

export const getScope = createSelector(getScopeState, fromScope.getScope);
export const isTadaaam = createSelector(getScope, (scope) => scope === 'tadaaam');
export const isTadaam = createSelector(getScope, isTadaaam, (scope, isTadaaam) => isTadaaam || scope === 'tadaam');
export const isTadam = createSelector(getScope, isTadaam, (scope, isTadaam) => isTadaam || scope === 'tadam');

//KADOLOG
export const getKadologState = (state: State) => state.kadolog;

export const getKadolog = createSelector(getKadologState, fromKadolog.getKadolog);
export const isEditingKadolog = createSelector(getKadologState, fromKadolog.isEditing);

//RSVP
export const getRsvpState = (state: State) => state.rsvp;

export const isEditingRsvp = createSelector(getRsvpState, fromRsvp.isEditing);

//GUEST
export const getGuestState = (state: State) => state.guest;

export const getGuests = createSelector(getGuestState, fromGuest.getGuests);
export const getCurrentKey = createSelector(getGuestState, fromGuest.getCurrentKey);
export const getCurrentGuest = createSelector(getGuests, getCurrentKey, (guests, currentKey) => {
    const filter = (guest) => guest.$key === currentKey;
    return guests.some(filter) ? guests.filter(filter)[0] : null;
});
export const guestHasRsvped = createSelector(getCurrentKey, currentKey => currentKey !== null);
export const getGuestKadolog = createSelector(getKadolog, getCurrentGuest, (kadolog, currentGuest) => {

    if(currentGuest === null) {
        return kadolog;
    }

    return kadolog
        .map(kado => Object.assign({}, kado, {
            participate: (currentGuest.kadoKeys && currentGuest.kadoKeys.includes(kado.$key))
        }) as GuestKado)
}
);
