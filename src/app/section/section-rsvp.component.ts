import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";
import {Guest} from "../guest/guest.model";
import * as guest from "../guest/guest.actions";
import * as rsvp from "../rsvp/rsvp.actions";
import {RsvpShowType} from "../rsvp/rsvp.reducer";

@Component({
    selector: 'wg-section-rsvp',
    template: `
        <section id="rsvp" class="section-padding">
            <div class="container">
                <wg-rsvp-form [ngSwitch]="show$ | async">
                    <wg-rsvp-form-save *ngSwitchCase="rsvpShowType.SAVE_FORM" [guest]="guest$ | async" (saveRsvp)="handleSaveRsvp($event)" (showLoadForm)="handleShowLoadForm($event)"></wg-rsvp-form-save>
                    <wg-rsvp-form-load *ngSwitchCase="rsvpShowType.LOAD_FORM" (loadRsvp)="handleLoadRsvp($event)" (showSaveForm)="handleShowSaveForm($event)"></wg-rsvp-form-load>
                    <wg-rsvp-done *ngSwitchCase="rsvpShowType.DONE" [guest]="guest$ | async" (showSaveForm)="handleShowSaveForm($event)"></wg-rsvp-done>
                </wg-rsvp-form>
            </div>
        </section>
    `
})
export class SectionRsvpComponent implements OnInit {
    guest$: Observable<Guest>;
    show$: Observable<RsvpShowType>;

    rsvpShowType = RsvpShowType;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.guest$ = this._store.select(fromRoot.getCurrentGuest);

        this.show$ = this._store.select(fromRoot.getShowRsvp);

        this._store.dispatch(new guest.LoadFromLocalAction());
    }

    handleShowSaveForm() {
        this._store.dispatch(new rsvp.RsvpShowAction(RsvpShowType.SAVE_FORM));
    }

    handleShowLoadForm() {
        this._store.dispatch(new rsvp.RsvpShowAction(RsvpShowType.LOAD_FORM));
    }

    handleSaveRsvp(rsvp: Guest) {
        this._store.dispatch(new guest.SaveRsvpAction(rsvp));
    }

    handleLoadRsvp(email: string) {
        this._store.dispatch(new guest.LoadFromEmailAction(email));
    }
}
