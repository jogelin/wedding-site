/**
 * Created by Joni on 28/12/2016.
 */
import {Inject, Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs";
import {FirebaseEntity} from "./entity.model";
import {GenericService} from "./generic.service";

@Injectable()
export class FirebaseGenericService<T extends FirebaseEntity> implements GenericService<T> {

    private firebase$: FirebaseListObservable<T[]> = null;

    constructor(api: string, @Inject(AngularFire) private _af: AngularFire = null) {
        this.firebase$ = this._af.database.list(api);
    }

    load(): Observable<T[]> {
        return Observable.from(this.firebase$);
    }

    save(entity: T): Observable<any> {
        return (entity.$key === null) ? this.create(entity) : this.update(entity);
    }

    create(entity: T): Observable<firebase.database.ThenableReference> {
        return Observable.from(this.firebase$.push(entity));
    }

    update({$key: $key, ...entity}): Observable<void> {
        return Observable.from(this.firebase$.update(`${$key}`, entity));
    }
}
