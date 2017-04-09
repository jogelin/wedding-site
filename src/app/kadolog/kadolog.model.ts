import {FirebaseEntity} from "../shared/domain/entity.model";

export type KadoType = 'FOOD' | 'FREE' | 'TRANSFER';

export class Kado extends FirebaseEntity {
    title: string;
    description: boolean;
    type: KadoType;
}
