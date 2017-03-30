/**
 * Created by Joni on 28/12/2016.
 */
import {Inject, Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Observable} from "rxjs";
import {Entity, FirebaseEntity} from "./entity.model";
import {GenericService} from "./generic.service";

@Injectable()
export class FirebaseGenericService<T extends FirebaseEntity> implements GenericService<T> {

    private firebaseList$: FirebaseListObservable<T[]> = null;
    private firebaseObject$: FirebaseObjectObservable<T> = null;
    private api: string = null;

    constructor(api: string, @Inject(AngularFire) private _af: AngularFire = null) {
        this.api = api
    }

    load($key:string): Observable<T> {
        this.firebaseObject$ = this._af.database.object(this.api+'/'+$key);
        return Observable.from(this.firebaseObject$);
    }

    loadAll(): Observable<T[]> {
        this.firebaseList$ = this._af.database.list(this.api);
        return Observable.from(this._af.database.list(this.api));
    }

    save(entity: T): Observable<any> {
        return (entity.$key === null) ? this.create(entity) : this.update(entity);
    }

    create(entity: T): Observable<firebase.database.ThenableReference> {
        return Observable.from(this.firebaseList$.push(entity));
    }

    update({$key: $key, ...entity}): Observable<void> {
        return Observable.from(this.firebaseList$.update(`${$key}`, entity));
    }
}
