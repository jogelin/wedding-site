/**
 * Created by Joni on 27/01/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import * as report from "./report.actions";
import {ReportActionTypes} from "./report.actions";
import {ReportService} from "./report.service";
import {Report} from "./report.model";


@Injectable()
export class ReportEffects {
    constructor(private _actions$: Actions, private _reportService: ReportService) {
    }

    @Effect()
    loadReport$: Observable <Action> = this._actions$
        .ofType(ReportActionTypes.LOAD)
        .switchMap(() =>
            this._reportService.loadReport()
                .map((rr: Report) => new report.LoadSuccessAction(rr))
                .catch(error => Observable.of(new report.LoadFailAction(error)))
        );

    @Effect()
    refreshReportCounts$: Observable <Action> = this._actions$
        .ofType(ReportActionTypes.LOAD_SUCCESS)
        .map(action => action.payload)
        .switchMap(rep =>
            this._reportService.refreshReportCounts(rep)
                .map(reportCountRefresh => new report.RefreshCountSuccessAction(reportCountRefresh))
                .catch(error => Observable.of(new report.RefreshCountFailAction(error)))
        );
}
