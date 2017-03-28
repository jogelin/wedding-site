/**
 * Created by Joni on 28/03/2017.
 */

export class FirebaseEntity extends Entity {
    $key: string;

    constructor($key: string = null) {
        super();
        this.$key = $key;
    }
}

export class Entity {
    dateCreation: Date;
    updateCreation: Date;

    constructor() {
        this.dateCreation = new Date();
        this.updateCreation = new Date();
    }
}
