import {FirebaseEntity} from "../shared/domain/entity.model";

export enum KadologShowType {
    NOT_AVAILABLE, SAVE_FORM, DONE
}

export type KadoType = 'FOOD' | 'FREE' | 'TRANSFER';

export class Kado extends FirebaseEntity {
    title: string;
    description: boolean;
    type: KadoType;
}

export interface DoneDescription {
    description: string;
    kadoKeys: string[];
}
