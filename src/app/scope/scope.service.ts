import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class ScopeService {

    _hostname = window.location.host.split('.')[0];

    constructor() {
    }

    initScope(): Observable<string> {
        if (environment.production) {
            return Observable.of(this._checkScope('tadaaam') || this._checkScope('tadaam') || this._checkScope('tadam'));
        } else {
            return Observable.of('tadaaam');
        }
    }

    _checkScope(scope:string):string | null {
        return (this._hostname.indexOf(scope) != -1)? scope:null;
    }
}
