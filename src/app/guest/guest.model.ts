import {FirebaseEntity} from "../shared/domain/entity.model";
import {Kado} from "../kadolog/kadolog.model";
export class Guest extends FirebaseEntity {
    name: string;
    email: string;
    confirmed: boolean;
    message: string;
    scope: string;
    kadoKeys: string[] = [];

    constructor(opt: Guest) {
        super();
        Object.assign(this, opt);
    }
}

export interface GuestKado extends Kado {
    participate: boolean;
}
