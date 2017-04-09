import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import * as fromRoot from "../app.reducer";
import {Store} from "@ngrx/store";
import {Kado, KadologShowType} from "../kadolog/kadolog.model";
import {KadologShowAction} from "../kadolog/kadolog.actions";
import * as guest from "../guest/guest.actions";

@Component({
    selector: 'wg-section-kadolog',
    template: `
        <section id="kadolog" class="section-padding">
            <div class="container">
                <wg-kadolog-form [ngSwitch]="show$ | async">
                    <wg-kadolog-not-available *ngSwitchCase="kadologShowType.NOT_AVAILABLE"></wg-kadolog-not-available>
                    <wg-kadolog-form-save *ngSwitchCase="kadologShowType.SAVE_FORM"
                                          [kadolog]="kadolog$ | async"
                                          [currentGuestKado]="currentGuestKado$ | async"
                                          (saveKadolog)="handleSaveKadolog($event)">
                    </wg-kadolog-form-save>
                    <wg-kadolog-done *ngSwitchCase="kadologShowType.DONE" [kadolog]="guestKadolog$ | async" (showSaveForm)="handleShowSaveForm($event)"></wg-kadolog-done>
                </wg-kadolog-form>
            </div>
        </section>
    `
})
export class SectionKadologComponent implements OnInit {
    kadolog$: Observable<Kado[]>;
    currentGuestKado$: Observable<Kado[]>;
    show$: Observable<KadologShowType>;

    kadologShowType = KadologShowType;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.kadolog$ = this._store.select(fromRoot.getKadolog);
        this.currentGuestKado$ = this._store.select(fromRoot.getCurrentGuestKado);

        this.show$ = this._store.select(fromRoot.getShowKadolog);

        this.initHandleShowNotAvailable();

    }

    initHandleShowNotAvailable() {
        this._store.select(fromRoot.guestHasRsvped)
            .do((dd) => console.log(dd))
            .subscribe(guestHasRsvped => {
                if (guestHasRsvped) {
                    this.handleShowSaveForm();
                } else {
                    this._store.dispatch(new KadologShowAction(KadologShowType.NOT_AVAILABLE))
                }
            });
    }

    handleShowSaveForm() {
        this._store.dispatch(new KadologShowAction(KadologShowType.SAVE_FORM));
    }

    handleSaveKadolog(kado: Kado[]) {
        this._store.dispatch(new guest.UpdateKadoParticipationAction(kado));
    }
}
