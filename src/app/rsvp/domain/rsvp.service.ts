/**
 * Created by Joni on 28/12/2016.
 */
import {Injectable} from "@angular/core";
import {FirebaseGenericService} from "../../shared/domain/firebase-generic.service";
import {Rsvp} from "./rsvp.model";
import {Observable} from "rxjs";


@Injectable()
export class RsvpService extends FirebaseGenericService<Rsvp> {

    constructor() {
        super('/rsvp');
    }

    save(rsvp: Rsvp): Observable<Rsvp> {
        return super.save(rsvp)
            .map((ref:firebase.database.ThenableReference) => Object.assign({}, rsvp, ref.key) as Rsvp)
            .do((rsvp) => localStorage.setItem('rsvp', rsvp.$key));
    }
}
