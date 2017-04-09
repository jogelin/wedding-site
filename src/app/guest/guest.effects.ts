/**
 * Created by Joni on 27/01/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Observable} from "rxjs";
import {GuestService} from "./guest.service";
import {Guest} from "./guest.model";
import {
    ActionTypes,
    LoadFailAction,
    LoadListFailAction,
    LoadListSuccessAction,
    LoadSuccessAction,
    SaveFailRsvpAction,
    SaveSuccessRsvpAction, UpdateKadoParticipationFailAction, UpdateKadoParticipationSuccessAction
} from "./guest.actions";
import {Action} from "@ngrx/store";
import {Kado} from "../kadolog/kadolog.model";

@Injectable()
export class GuestEffects {
    constructor(private _actions$: Actions, private _service: GuestService) {
    }

    @Effect()
    loadGuestFromLocal$: Observable<Action> = this._actions$
        .ofType(ActionTypes.LOAD_FROM_LOCAL)
        .switchMap(() =>
            this._service.loadFromLocal()
                .map(($key: string) => new LoadSuccessAction($key))
                .catch(error => Observable.of(new LoadFailAction(error)))
        );

    @Effect()
    loadGuestFromEmail$: Observable<Action> = this._actions$
        .ofType(ActionTypes.LOAD_FROM_EMAIL)
        .map(toPayload)
        .switchMap((payload: string) =>
            this._service.loadFromEmail(payload)
                .map(($key: string) => new LoadSuccessAction($key))
                .catch(error => Observable.of(new LoadFailAction(error)))
        );

    @Effect()
    saveGuest$: Observable<Action> = this._actions$
        .ofType(ActionTypes.SAVE_RSVP)
        .map(toPayload)
        .switchMap((payload: Guest) =>
            this._service.save(payload)
                .map($key => new SaveSuccessRsvpAction($key))
                .catch(error => Observable.of(new SaveFailRsvpAction(error)))
        );


    @Effect()
    updateKadoParticipation$: Observable<Action> = this._actions$
        .ofType(ActionTypes.UPDATE_KADO_PARTICIPATION)
        .map(toPayload)
        .switchMap((payload: string[]) =>
            this._service.updateKadoParticipation(payload)
                .map($key => new UpdateKadoParticipationSuccessAction($key))
                .catch(error => Observable.of(new UpdateKadoParticipationFailAction(error)))
        );

    @Effect()
    loadAllGuest$: Observable<Action> = this._actions$
        .ofType(ActionTypes.LOAD_LIST)
        .switchMap(() =>
            this._service.loadAll()
                .map((guests: Guest[]) => new LoadListSuccessAction(guests))
                .catch(error => Observable.of(new LoadListFailAction(error)))
        );
}
