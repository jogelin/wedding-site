import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";
import {Guest} from "../guest/guest.model";
import {EditAction, LoadAction, LoadListAction, SaveAction} from "../guest/guest.actions";

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
                        <wg-rsvp-form *ngIf="editing$ | async" [guest]="rsvp$ | async" (saveGuest)="handleSaveRsvp($event)"></wg-rsvp-form>
                        <wg-rsvp-done *ngIf="!(editing$ | async)" [rsvp]="rsvp$ | async" (editRsvp)="handleEditRsvp($event)"></wg-rsvp-done>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class SectionRsvpComponent implements OnInit {
    rsvp$: Observable<Guest>;
    editing$: Observable<boolean>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.rsvp$ = this._store.select(fromRoot.getCurrentGuests);
        this.editing$ = this._store.select(fromRoot.isEditing);

        this._store.dispatch(new LoadAction());
        this._store.dispatch(new LoadListAction());
    }

    handleEditRsvp() {
        this._store.dispatch(new EditAction());
    }

    handleSaveRsvp(rsvp: Guest) {
        this._store.dispatch(new SaveAction(rsvp));
    }
}
