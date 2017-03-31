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
                        <wg-rsvp-form *ngIf="editing$ | async" [guest]="guest$ | async" (saveGuest)="handleSaveGuest($event)"></wg-rsvp-form>
                        <wg-rsvp-done *ngIf="!(editing$ | async)" [guest]="guest$ | async" (editRsvp)="handleEditGuest($event)"></wg-rsvp-done>
                    </div>
                </div>
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
        this.editing$ = this._store.select(fromRoot.isEditing);

        this._store.dispatch(new LoadAction());
        this._store.dispatch(new LoadListAction());
    }

    handleEditGuest() {
        this._store.dispatch(new EditAction());
    }

    handleSaveGuest(rsvp: Guest) {
        this._store.dispatch(new SaveAction(rsvp));
    }
}
