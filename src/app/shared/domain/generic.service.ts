/**
 * Created by Joni on 28/12/2016.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Entity} from "./entity.model";

@Injectable()
export interface GenericService<T extends Entity> {
    load(): Observable<T[]>;
    save(entity: T): Observable<any>;
    create(entity: T): Observable<firebase.database.ThenableReference> ;
    update({$key: $key, ...entity}): Observable<void>;
}
