/**
 * Created by Joni on 28/12/2016.
 */
import {Observable} from "rxjs";
import {Entity} from "./entity.model";

export interface GenericService<T extends Entity> {
    load($key:string): Observable<T>;
    loadAll(): Observable<T[]>;
    save(entity: T): Observable<any>;
    create(entity: T): Observable<firebase.database.ThenableReference> ;
    update({$key: $key, ...entity}): Observable<void>;
}
