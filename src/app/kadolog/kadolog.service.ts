/**
 * Created by Joni on 28/12/2016.
 */
import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Observable, BehaviorSubject} from "rxjs";


export class Kadolog {
    $key: string;
    name: string;
    email: string;
    confirmed: boolean;
    message: string;
    date: Date;
}

@Injectable()
export class KadologService {

    private _kadologFirebase$: FirebaseListObservable<Kadolog[]> = null;
    private _currentKadolog$: BehaviorSubject<Kadolog> = null;

    constructor(private _af: AngularFire) {
        if (localStorage.getItem('kadolog')) {
            this.currentKadolog$.next(JSON.parse(localStorage.getItem('kadolog')) as Kadolog);
        }
    }

    loadKadologs(): Observable<Kadolog[]> {
        return Observable.from(this.kadologFirebase$);
    }

    addKadolog(kadolog: Kadolog): Observable<any> {
        return Observable.of(this.kadologFirebase$.push(kadolog))
            .do((id) => {
                kadolog.$key = id.key;
                this.currentKadolog$.next(kadolog);
                return id;
            });
    }

    updateKadolog(kadolog: Kadolog): Observable<void> {
        const newKadolog:Kadolog = Object.assign({},kadolog);
        delete newKadolog.$key;
        return Observable.from(this.kadologFirebase$.update(`${kadolog.$key}`, newKadolog));
    }

    resetKadolog(): void {
        localStorage.removeItem('kadolog');
        this.currentKadolog$.next(null);
    }

    get kadologFirebase$(): FirebaseListObservable<Kadolog[]> {
        if (this._kadologFirebase$ === null) {
            this._kadologFirebase$ = this._af.database.list('/kadolog');
        }
        return this._kadologFirebase$;
    }

    get currentKadolog$(): BehaviorSubject<Kadolog> {
        if (this._currentKadolog$ === null) {
            this._currentKadolog$ = new BehaviorSubject<Kadolog>(JSON.parse(localStorage.getItem('kadolog')) as Kadolog)
                .do(kadolog => {
                    if(kadolog !== null)
                        localStorage.setItem('kadolog', JSON.stringify(kadolog))
                }) as BehaviorSubject<Kadolog>;
        }
        return this._currentKadolog$;
    }
}
