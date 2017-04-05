import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";
import {Guest} from "../guest/guest.model";
import * as guest from "../guest/guest.actions";
import * as rsvp from "../rsvp/rsvp.actions";

@Component({
    selector: 'wg-section-rsvp',
    template: `
        <section id="rsvp" class="section-padding">
            <div class="container">
                <wg-rsvp-form *ngIf="editing$ | async" [guest]="guest$ | async" (saveRsvp)="handleSaveRsvp($event)"></wg-rsvp-form>
                <wg-rsvp-done *ngIf="!(editing$ | async)" [guest]="guest$ | async" (editRsvp)="handleEditRsvp($event)"></wg-rsvp-done>
            </div>
        </section>
    `
})
export class SectionRsvpComponent implements OnInit {
    guest$: Observable<Guest>;
    editing$: Observable<boolean>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.guest$ = this._store.select(fromRoot.getCurrentGuest);
        this.editing$ = this._store.select(fromRoot.isEditingRsvp);

        this._store.dispatch(new guest.LoadAction());
    }

    handleEditRsvp() {
        this._store.dispatch(new rsvp.EditAction());
    }

    handleSaveRsvp(rsvp: Guest) {
        this._store.dispatch(new guest.SaveRsvpAction(rsvp));
    }
}
