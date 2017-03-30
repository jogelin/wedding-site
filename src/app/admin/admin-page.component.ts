import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Rsvp} from "../rsvp/domain/rsvp.model";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";


@Component({
    selector: 'wg-admin-page',
    template: `        
            <div class="container">
                <div class="row">
                    <div class="col">
                        <wg-rsvp-list></wg-rsvp-list>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <wg-kadolog-list></wg-kadolog-list>
                    </div>
                </div>
            </div> 
    `
})
export class AdminPageComponent implements OnInit {

    rsvps$: Observable<Rsvp[]>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.rsvps$ = this._store.select(fromRoot.getRsvps);
    }
}
