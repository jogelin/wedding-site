/**
 * Created by Joni on 28/12/2016.
 */
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs";
import {FirebaseEntity} from "./entity.model";

export class FirebaseGenericService<T extends FirebaseEntity> {

    private firebaseList$: FirebaseListObservable<T[]> = null;
    private api: string = null;

    constructor(api: string, private _af: AngularFire) {
        this.api = api;
        this.firebaseList$ = _af.database.list(this.api);
    }

    loadAll(): Observable<T[]> {
        return this.firebaseList$;
    }

    create({$key: $key, ...entity}): Observable<string> {
        return Observable.from(this.firebaseList$.push(entity))
            .map(ref => ref.key);
    }

    update({$key: $key, ...entity}): Observable<string> {
        entity.updateDate = new Date().toISOString();
        return Observable.from(this.firebaseList$.update($key, entity))
            .mapTo($key);
    }
}
