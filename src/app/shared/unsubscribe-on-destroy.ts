import {Subject} from 'rxjs/Subject';
import {OnDestroy} from '@angular/core';

export abstract class UnsubscribeOnDestroy implements OnDestroy {

    protected componentDestroyed$: Subject<void>;

    constructor() {
        this.componentDestroyed$ = new Subject<void>();

        let f = this.ngOnDestroy;
        this.ngOnDestroy = () => {
            f();
            this.componentDestroyed$.complete();
        };
    }

    ngOnDestroy() {
        // no-op
    }
}
