/**
 * Created by Joni on 28/03/2017.
 */

export class Entity {
    creationDate: string;
    updateDate: strin;
}

export class FirebaseEntity extends Entity {
    public $key: string;

    constructor($key: string = null) {
        super();
        this.$key = $key;
    }
}
