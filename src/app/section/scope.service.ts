import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class ScopeService {
    private _tadam$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private _tadaam$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private _tadaaam$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {
        const hostname = window.location.host.split('.')[0];

        if (environment.production) {
            this._tadaaam$.next(hostname.indexOf('tadaaam') != -1);
            this._tadaaam$
                .switchMap(val => Observable.of(val || hostname.indexOf('tadaam') != -1))
                .subscribe(val => this._tadaam$.next(val))
            this._tadaam$
                .switchMap(val => Observable.of(val || hostname.indexOf('tadam') != -1))
                .subscribe(val => this._tadam$.next(val))
        } else {
            this._tadaaam$.next(true);
            this._tadaam$.next(true);
            this._tadam$.next(true);
        }
    }

    get tadam$(): BehaviorSubject<boolean> {
        return this._tadam$;
    }

    get tadaam$(): BehaviorSubject<boolean> {
        return this._tadaam$;
    }

    get tadaaam$(): BehaviorSubject<boolean> {
        return this._tadaaam$;
    }
}
