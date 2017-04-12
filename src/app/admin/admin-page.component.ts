import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Guest} from "../guest/guest.model";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";
import {KadoReport} from './admin.model';


@Component({
    selector: 'wg-admin-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `        
            <div class="container">
                <div class="row">
                    <div class="col">
                        <wg-guest-list [guests]="guests$ | async"></wg-guest-list>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <wg-kadolog-report [kadologReport]="kadologReport$ | async"></wg-kadolog-report>
                    </div>
                </div>
            </div> 
    `
})
export class AdminPageComponent implements OnInit {

    guests$: Observable<Guest[]>;
    kadologReport$: Observable<KadoReport[]>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.guests$ = this._store.select(fromRoot.getGuests);
        this.kadologReport$ = this._store.select(fromRoot.getKadologReport);
    }
}
