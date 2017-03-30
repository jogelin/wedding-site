/**
 * Created by Joni on 28/12/2016.
 */
import {Injectable} from "@angular/core";
import {FirebaseGenericService} from "../../shared/domain/firebase-generic.service";
import {Kadolog} from "./kadolog.model";


@Injectable()
export class KadologService extends FirebaseGenericService<Kadolog> {

    constructor() {
        super('/kadolog');
        /* if (localStorage.getItem('kadolog')) {
         this.currentKadolog$.next(JSON.parse(localStorage.getItem('kadolog')) as Kadolog);
         }*/
    }

    resetKadolog(): void {
        localStorage.removeItem('kadolog');
        //  this.currentKadolog$.next(null);
    }

    /*get currentKadolog$(): BehaviorSubject<Kadolog> {
     if (this._currentKadolog$ === null) {
     this._currentKadolog$ = new BehaviorSubject<Kadolog>(JSON.parse(localStorage.getItem('kadolog')) as Kadolog)
     .do(kadolog => {
     if(kadolog !== null)
     localStorage.setItem('kadolog', JSON.stringify(kadolog))
     }) as BehaviorSubject<Kadolog>;
     }
     return this._currentKadolog$;
     }*/
}
