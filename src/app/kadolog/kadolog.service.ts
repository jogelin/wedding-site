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

    private _kadologFirebase$: FirebaseListObservable<Rsvp[]> = null;
    private _currentRsvp$: BehaviorSubject<Rsvp> = null;

    constructor(private _af: AngularFire) {
        if (localStorage.getItem('kadolog')) {
            this.currentRsvp$.next(JSON.parse(localStorage.getItem('kadolog')) as Rsvp);
        }
    }

    loadRsvps(): Observable<Rsvp[]> {
        return Observable.from(this.kadologFirebase$);
    }

    addRsvp(kadolog: Rsvp): Observable<any> {
        return Observable.of(this.kadologFirebase$.push(kadolog))
            .do((id) => {
                kadolog.$key = id.key;
                this.currentRsvp$.next(kadolog);
                return id;
            });
    }

    updateRsvp(kadolog: Rsvp): Observable<void> {
        const newRsvp:Rsvp = Object.assign({},kadolog);
        delete newRsvp.$key;
        return Observable.from(this.kadologFirebase$.update(`${kadolog.$key}`, newRsvp));
    }

    resetRsvp(): void {
        localStorage.removeItem('kadolog');
        this.currentRsvp$.next(null);
    }

    get kadologFirebase$(): FirebaseListObservable<Rsvp[]> {
        if (this._kadologFirebase$ === null) {
            this._kadologFirebase$ = this._af.database.list('/kadolog');
        }
        return this._kadologFirebase$;
    }

    get currentRsvp$(): BehaviorSubject<Rsvp> {
        if (this._currentRsvp$ === null) {
            this._currentRsvp$ = new BehaviorSubject<Rsvp>(JSON.parse(localStorage.getItem('kadolog')) as Rsvp)
                .do(kadolog => {
                    if(kadolog !== null)
                        localStorage.setItem('kadolog', JSON.stringify(kadolog))
                }) as BehaviorSubject<Rsvp>;
        }
        return this._currentRsvp$;
    }
}
