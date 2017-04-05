/**
 * Created by Joni on 28/12/2016.
 */
import {Inject, Injectable} from "@angular/core";
import {Guest} from "./guest.model";
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";
import {FirebaseGenericService} from "../shared/domain/firebase-generic.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../app.reducer";

@Injectable()
export class GuestService extends FirebaseGenericService<Guest> {

    scope$: Observable<string>;
    currentGuest$: Observable<Guest>;

    constructor(@Inject(AngularFire)_af: AngularFire, private _store: Store<fromRoot.State>) {
        super('/guests', _af);

        this.scope$ = this._store.select(fromRoot.getScope);
        this.currentGuest$ = this._store.select(fromRoot.getCurrentGuest);
    }

    load(): Observable<string | null> {
        return localStorage.getItem('guest') ? Observable.of(localStorage.getItem('guest')) : Observable.empty();
    }

    save(guestToSave: Guest): Observable<string> {
        return Observable.of(guestToSave)
            .withLatestFrom(this.scope$, this.currentGuest$)
            .map(([guestToSave, scope, currentGuest]) =>{
                const newGuest = Object.assign({},
                    guestToSave, {
                        scope: scope
                    }) as Guest;
                return (currentGuest !== null) ? this.update(currentGuest.$key, newGuest) : this.create(newGuest);
            })
            .switch()
            .do(($key) => localStorage.setItem('guest', $key))
            .do(($key) => console.log($key));
    }
}
