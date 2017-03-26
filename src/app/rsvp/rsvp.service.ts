/**
 * Created by Joni on 28/12/2016.
 */
import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Observable, BehaviorSubject} from "rxjs";


export class Rsvp {
    $key: string;
    name: string;
    email: string;
    confirmed: boolean;
    message: string;
    date: Date;
}

@Injectable()
export class RsvpService {

    private _rsvpFirebase$: FirebaseListObservable<Rsvp[]> = null;
    private _currentRsvp$: BehaviorSubject<Rsvp> = null;

    constructor(private _af: AngularFire) {
        if (localStorage.getItem('rsvp')) {
            this.currentRsvp$.next(JSON.parse(localStorage.getItem('rsvp')) as Rsvp);
        }
    }

    loadRsvps(): Observable<Rsvp[]> {
        return Observable.from(this.rsvpFirebase$);
    }

    addRsvp(rsvp: Rsvp): Observable<any> {
        return Observable.of(this.rsvpFirebase$.push(rsvp))
            .do((id) => {
                rsvp.$key = id.key;
                this.currentRsvp$.next(rsvp);
                return id;
            });
    }

    updateRsvp(rsvp: Rsvp): Observable<void> {
        const newRsvp:Rsvp = Object.assign({},rsvp);
        delete newRsvp.$key;
        return Observable.from(this.rsvpFirebase$.update(`${rsvp.$key}`, newRsvp));
    }

    resetRsvp(): void {
        localStorage.removeItem('rsvp');
        this.currentRsvp$.next(null);
    }

    get rsvpFirebase$(): FirebaseListObservable<Rsvp[]> {
        if (this._rsvpFirebase$ === null) {
            this._rsvpFirebase$ = this._af.database.list('/rsvp');
        }
        return this._rsvpFirebase$;
    }

    get currentRsvp$(): BehaviorSubject<Rsvp> {
        if (this._currentRsvp$ === null) {
            this._currentRsvp$ = new BehaviorSubject<Rsvp>(JSON.parse(localStorage.getItem('rsvp')) as Rsvp)
                .do(rsvp => {
                    if(rsvp !== null)
                        localStorage.setItem('rsvp', JSON.stringify(rsvp))
                }) as BehaviorSubject<Rsvp>;
        }
        return this._currentRsvp$;
    }
}
