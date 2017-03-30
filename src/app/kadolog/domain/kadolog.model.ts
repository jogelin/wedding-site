import {FirebaseEntity} from "../../shared/domain/entity.model";

export interface Kadolog extends FirebaseEntity {
    name: string;
    email: string;
    confirmed: boolean;
    message: string;
}
