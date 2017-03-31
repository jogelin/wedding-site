/**
 * Created by Joni on 27/01/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {ScopeService} from "./scope.service";
import {Action} from "@ngrx/store";
import {ActionTypes, UpdateFailAction, UpdateSuccessAction} from "./scope.actions";

@Injectable()
export class ScopeEffects {
    constructor(private _actions$: Actions, private _service: ScopeService) {
    }

    @Effect()
    loadScope$: Observable<Action> = this._actions$
        .ofType(ActionTypes.UPDATE)
        .switchMap(() =>
            this._service.initScope()
                .map(($key: string) => new UpdateSuccessAction($key))
                .catch(error => Observable.of(new UpdateFailAction(error)))
        );
}
