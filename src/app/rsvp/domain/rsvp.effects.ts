/**
 * Created by Joni on 27/01/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {RsvpService} from "./rsvp.service";
import {Action} from "rxjs/Scheduler";
import {Rsvp} from "./rsvp.model";
import {ActionTypes, LoadFailAction, LoadSuccessAction} from "./rsvp.actions";

@Injectable()
export class RsvpEffects {
    constructor(private _actions$: Actions, private _service: RsvpService) {
    }

    @Effect()
    loadRsvp$: Observable <Action> = this._actions$
        .ofType(ActionTypes.LOAD)
        .switchMap(() =>
            this._service.load()
                .map((entity: Rsvp) => new LoadSuccessAction(entity))
                .catch(error => Observable.of(new LoadFailAction(error)))
        );
}
