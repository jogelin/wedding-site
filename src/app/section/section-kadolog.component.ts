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
                <div class="row">
                    <img src="../../assets/kado_title.svg" class="col-sm-12 col-md-6 offset-md-3" alt="Responsive image">
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <wg-kado-form *ngIf="editing$ | async" [kadolog]="kadolog$ | async" (saveKadolog)="handleSaveKadolog($event)"></wg-kado-form>
                        <wg-kado-done *ngIf="!(editing$ | async)" [kadolog]="kadolog$ | async" (editKadolog)="handleEditKadolog($event)"></wg-kado-done>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class SectionRsvpComponent implements OnInit {
    kadolog$: Observable<Kado[]>;
    editing$: Observable<boolean>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.kadolog$ = this._store.select(fromRoot.getKadolog);
        this.editing$ = this._store.select(fromRoot.isEditingKadolog);
    }

    handleEditKadolog() {
        this._store.dispatch(new kadolog.EditAction());
    }

    handleSaveKadolog(kado: Kado[]) {
        this._store.dispatch(new guest.SaveKadologAction(kado));
    }
}
