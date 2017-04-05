import {FirebaseEntity} from "../shared/domain/entity.model";

export type KadoType = 'NUMBER' | 'FREE';

export class Kado extends FirebaseEntity {
    icon: string;
    title: string;
    description: boolean;
    type: KadoType;
    scope:string;
}
