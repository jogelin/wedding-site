/**
 * Created by Joni on 28/12/2016.
 */
import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Observable, BehaviorSubject} from "rxjs";
import {FirebaseGenericService} from "../../shared/domain/firebase-generic.service";
import {Rsvp} from "./rsvp.model";




@Injectable()
export class RsvpService extends FirebaseGenericService<Rsvp> {

    constructor() {
        super('/rsvp');
       /* if (localStorage.getItem('rsvp')) {
            this.currentRsvp$.next(JSON.parse(localStorage.getItem('rsvp')) as Rsvp);
        }*/
    }

    resetRsvp(): void {
        localStorage.removeItem('rsvp');
      //  this.currentRsvp$.next(null);
    }

   /*get currentRsvp$(): BehaviorSubject<Rsvp> {
        if (this._currentRsvp$ === null) {
            this._currentRsvp$ = new BehaviorSubject<Rsvp>(JSON.parse(localStorage.getItem('rsvp')) as Rsvp)
                .do(rsvp => {
                    if(rsvp !== null)
                        localStorage.setItem('rsvp', JSON.stringify(rsvp))
                }) as BehaviorSubject<Rsvp>;
        }
        return this._currentRsvp$;
    }*/
}
