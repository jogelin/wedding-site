/**
 * Created by Joni on 27/01/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {GenericService} from "./generic.service";
import {Entity} from "./entity.model";
import {Action} from "@ngrx/store";

@Injectable()
export class GenericEffects<T extends Entity, A extends Action, S extends GenericService<T>> {
    constructor(private _actions$: Actions, private _service: S) {
    }

    @Effect()
    load$: Observable <Action> = this._actions$
        .ofType(A.LOAD)
        .switchMap(() =>
            this._service.load()
                .map((payload: T) => new LoadSuccessAction(payload))
                .catch(error => Observable.of(new LoadFailAction(error)))
        );
}
