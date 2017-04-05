/**
 * Created by Joni on 27/01/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {KadologService} from "./kadolog.service";
import {Kado} from "./kadolog.model";
import {ActionTypes, LoadListFailAction, LoadListSuccessAction} from "./kadolog.actions";
import {Action} from "@ngrx/store";

@Injectable()
export class KadologEffects {
    constructor(private _actions$: Actions, private _service: KadologService) {
    }

    @Effect()
    loadKadolog$: Observable<Action> = this._actions$
        .ofType(ActionTypes.LOAD_LIST)
        .switchMap(() =>
            this._service.loadAll()
                .map((kadolog: Kado[]) => new LoadListSuccessAction(kadolog))
                .catch(error => Observable.of(new LoadListFailAction(error)))
        );
}
