import {ActionReducer, combineReducers} from "@ngrx/store";
import {environment} from "../environments/environment";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import * as fromRsvp from "./guest/guest.reducer";
import {createSelector} from "reselect";

export interface State {
    guest: fromRsvp.State;
}

const reducers = {
    guest: fromRsvp.reducer,
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

export const getGuests = createSelector(getGuestState, fromRsvp.getGuests);
export const getCurrentKey = createSelector(getGuestState, fromRsvp.getCurrentKey);
export const getCurrentGuests = createSelector(getGuests, getCurrentKey, (guests, currentKey) => {
    const filter = (guest) => guest.$key === currentKey;
    return guests.some(filter) ? guests.filter(filter)[0]:null;
});
export const isEditing = createSelector(getGuestState, fromRsvp.isEditing);

//KADOLOG
// export const getKadologState = (state: State) => state.guest;
//
// export const getKadologs = createSelector(getKadologState, fromKadolog.getKadologs);
// export const getCurrentKadolog = createSelector(getKadologState, fromKadolog.getCurrentRsvpEmail);
