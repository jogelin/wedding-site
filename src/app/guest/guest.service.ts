/**
 * Created by Joni on 28/12/2016.
 */
import {Inject, Injectable} from "@angular/core";
import {Guest} from "./guest.model";
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";
import {FirebaseGenericService} from "../shared/domain/firebase-generic.service";


@Injectable()
export class GuestService extends FirebaseGenericService<Guest> {

    constructor(@Inject(AngularFire)_af: AngularFire)  {
        super('/guests', _af);
    }


    load(): Observable<string | null> {
        return localStorage.getItem('guest') ? Observable.of(localStorage.getItem('guest')) : Observable.empty();
    }

    save(guestToSave: Guest): Observable<string> {
        return Observable.of(guestToSave)
            .map((guest) => (guest.$key && guest.$key !== null)? this.update(guest) : this.create(guest))
            .switch()
            .do(($key) => localStorage.setItem('guest',$key))
            .do(($key) => console.log($key));
    }
}
