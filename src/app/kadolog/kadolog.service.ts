/**
 * Created by Joni on 28/12/2016.
 */
import {Inject, Injectable} from "@angular/core";
import {Kado} from "./kadolog.model";
import {AngularFire} from "angularfire2";
import {FirebaseGenericService} from "../shared/domain/firebase-generic.service";

@Injectable()
export class KadologService extends FirebaseGenericService<Kado> {

    constructor(@Inject(AngularFire)_af: AngularFire) {
        super('/kadolog', _af);
    }

}
