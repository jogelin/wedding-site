import {FirebaseEntity} from "../../shared/domain/entity.model";

export interface Rsvp extends FirebaseEntity {
    name: string;
    email: string;
    confirmed: boolean;
    message: string;
}
