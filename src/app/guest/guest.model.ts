import {FirebaseEntity} from "../shared/domain/entity.model";
export class Guest extends FirebaseEntity {
    name: string;
    email: string;
    confirmed: boolean;
    message: string;
    scope: string;
    kados: GuestKado[];
}

export interface GuestKado {
    kadoKey: string;
    quantity: string;
}
