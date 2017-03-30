/**
 * Created by Joni on 27/01/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Observable} from "rxjs";
import {RsvpService} from "./rsvp.service";
import {Rsvp} from "./rsvp.model";
import {
    ActionTypes, LoadFailAction, LoadSuccessAction, LoadListSuccessAction,
    LoadListFailAction, SaveFailAction,
} from "./rsvp.actions";
import {Action} from "@ngrx/store";
import {SaveSuccessAction} from "../../kadolog/domain/kadolog.actions";

@Injectable()
export class RsvpEffects {
    constructor(private _actions$: Actions, private _service: RsvpService) {
    }

    @Effect()
    loadRsvp$: Observable <Action> = this._actions$
        .ofType(ActionTypes.LOAD)
        .map(toPayload)
        .switchMap((payload:string) =>
            this._service.load(payload)
                .map((entity: Rsvp) => new LoadSuccessAction(entity))
                .catch(error => Observable.of(new LoadFailAction(error)))
        );

    @Effect()
    saveRsvp$: Observable <Action> = this._actions$
        .ofType(ActionTypes.SAVE)
        .map(toPayload)
        .switchMap((payload:Rsvp) =>
            this._service.save(payload)
                .map((entity: Rsvp) => new SaveSuccessAction(entity))
                .catch(error => Observable.of(new SaveFailAction(error)))
        );

    @Effect()
    loadAllRsvp$: Observable <Action> = this._actions$
        .ofType(ActionTypes.LOAD_LIST)
        .switchMap(() =>
            this._service.loadAll()
                .map((rsvps: Rsvp[]) => new LoadListSuccessAction(rsvps))
                .catch(error => Observable.of(new LoadListFailAction(error)))
        );
}
