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
    SaveFailAction,
    SaveSuccessAction
} from "./guest.actions";
import {Action} from "@ngrx/store";

@Injectable()
export class GuestEffects {
    constructor(private _actions$: Actions, private _service: GuestService) {
    }

    @Effect()
    loadGuest$: Observable<Action> = this._actions$
        .ofType(ActionTypes.LOAD)
        .switchMap(() =>
            this._service.load()
                .map(($key: string) => new LoadSuccessAction($key))
                .catch(error => Observable.of(new LoadFailAction(error)))
        );

    @Effect()
    saveGuest$: Observable<Action> = this._actions$
        .ofType(ActionTypes.SAVE)
        .map(toPayload)
        .switchMap((payload: Guest) =>
            this._service.save(payload)
                .map($key => new SaveSuccessAction($key))
                .catch(error => Observable.of(new SaveFailAction(error)))
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
