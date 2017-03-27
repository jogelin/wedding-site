/**
 * Created by Joni on 27/01/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {RsvpService} from "../rsvp.service";
import {Action} from "rxjs/Scheduler";

@Injectable()
export class RsvpEffects {
    constructor(private _actions$: Actions, private _reportService: RsvpService) {
    }

    @Effect()
    loadRsvp$: Observable <Action> = this._actions$
        .ofType(RsvpActionTypes.LOAD)
        .switchMap(() =>
            this._reportService.loadRsvp()
                .map((rr: Rsvp) => new report.LoadSuccessAction(rr))
                .catch(error => Observable.of(new report.LoadFailAction(error)))
        );
}
