import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Guest} from "../guest/guest.model";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";


@Component({
    selector: 'wg-admin-page',
    template: `        
            <div class="container">
                <div class="row">
                    <div class="col">
                        <wg-guest-list></wg-guest-list>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                </div>
            </div> 
    `
})
export class AdminPageComponent implements OnInit {

    guest$: Observable<Guest[]>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.guest$ = this._store.select(fromRoot.getGuests);
    }
}
