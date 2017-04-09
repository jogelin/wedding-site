import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";
import {Kado} from "../kadolog/kadolog.model";
import * as kadolog from "../kadolog/kadolog.actions";
import * as guest from "../guest/guest.actions";

@Component({
    selector: 'wg-section-kadolog',
    template: `
        <section id="kadolog" class="section-padding">
            <div class="container">
                <wg-kadolog-form *ngIf="editing$ | async" [kadolog]="guestKadolog$ | async" (saveKadolog)="handleSaveKadolog($event)"></wg-kadolog-form>
                <wg-kadolog-done *ngIf="!(editing$ | async)" [kadolog]="guestKadolog$ | async" (editKadolog)="handleEditKadolog($event)"></wg-kadolog-done>
            </div>
        </section>
    `
})
export class SectionKadologComponent implements OnInit {
    guestKadolog$: Observable<Kado[]>;
    editing$: Observable<boolean>;
    guestHasRsvped: Observable<boolean>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.guestKadolog$ = this._store.select(fromRoot.getGuestKadolog);
        this.editing$ = this._store.select(fromRoot.isEditingKadolog);
        this.guestHasRsvped = this._store.select(fromRoot.guestHasRsvped);
    }

    handleEditKadolog() {
        this._store.dispatch(new kadolog.EditAction());
    }

    handleSaveKadolog(kado: Kado[]) {
        this._store.dispatch(new guest.UpdateKadoParticipationAction(kado));
    }
}
