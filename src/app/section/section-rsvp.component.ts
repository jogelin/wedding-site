import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";
import {Rsvp} from "../rsvp/domain/rsvp.model";

@Component({
    selector: 'wg-section-rsvp',
    template: `
        <section id="rsvp" class="section-padding">
            <div class="container">
                <div class="row">
                    <img src="../../assets/rsvp_title.svg" class="col-sm-12 col-md-6 offset-md-3" alt="Responsive image">
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <wg-rsvp-form *ngIf="!(hasRsvp$ | async)" [rsvp]="rsvp$ | async" (editRsvp)="handleEditRsvp"></wg-rsvp-form>
                        <wg-rsvp-done *ngIf="hasRsvp$ | async" [rsvp]="rsvp$ | async"></wg-rsvp-done>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class SectionRsvpComponent implements OnInit {
    rsvp$: Observable<Rsvp>;
    hasRsvp$: Observable<boolean>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.rsvp$ = this._store.select(fromRoot.getCurrentRsvp);
        //this.hasRsvp$ = this._store.select(fromRoot.hasRsvp);

    }

    handleEditRsvp() {
        //  this._store.dispatch(new SaveAction())
    }
}
