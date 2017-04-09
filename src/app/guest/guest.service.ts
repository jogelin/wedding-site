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
    guests$: Observable<Guest[]>;

    constructor(@Inject(AngularFire)_af: AngularFire, private _store: Store<fromRoot.State>) {
        super('/guests', _af);

        this.scope$ = this._store.select(fromRoot.getScope);
        this.currentGuest$ = this._store.select(fromRoot.getCurrentGuest);
        this.guests$ = this._store.select(fromRoot.getGuests);

        this._initCurrentGuestStorageListener();
    }

    loadFromLocal(): Observable<string | null> {
        return localStorage.getItem('guest') ? Observable.of(localStorage.getItem('guest')) : Observable.empty();
    }

    loadFromEmail(email: string): Observable<string | null> {
        return Observable.of(email)
            .do((newKadoKeys) => console.log('Load From Email : ', email))
            .withLatestFrom(this.guests$)
            .map(([email, guests]) => {
                const foundGuestFromEmail = (guest) => guest.email === email;
                return (guests.some(foundGuestFromEmail)) ? guests.filter(foundGuestFromEmail)[0].$key : null;
            });
    }

    save(guestToSave: Guest): Observable<string> {
        return Observable.of(guestToSave)
            .do((newKadoKeys) => console.log('Save Guest : ', guestToSave))
            .withLatestFrom(this.scope$, this.currentGuest$)
            .map(([guestToSave, scope, currentGuest]) => {
                const newGuest = Object.assign({},
                    guestToSave, {
                        scope: scope
                    }) as Guest;
                return (currentGuest !== null && currentGuest.email === guestToSave.email) ? this.update(currentGuest.$key, newGuest) : this.create(newGuest);
            })
            .switch();
    }

    private _initCurrentGuestStorageListener() {
        this.currentGuest$
            .filter(guest => guest !== null)
            .map(guest => guest.$key)
            .distinctUntilChanged()
            .do(($key) => console.log('Store : ', $key))
            .subscribe($key => localStorage.setItem('guest', $key));
    }

    updateKadoParticipation(newKadoKeys: string[]): Observable<string> {
        return Observable.of(newKadoKeys)
            .do((newKadoKeys) => console.log('Update Kadolog : ', newKadoKeys))
            .withLatestFrom(this.currentGuest$)
            .map(([newKadoKeys, currentGuest]) => {
                const newGuest = Object.assign({},
                    currentGuest, {
                        kadoKeys: newKadoKeys
                    }) as Guest;
                return this.update(currentGuest.$key, newGuest);
            })
            .switch();
    }
}
