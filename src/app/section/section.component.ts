import {Component, Input} from '@angular/core';

@Component({
    selector: 'wg-section',
    template: `
        <section [id]="idi" [ngClass]="bg">
            <ng-content></ng-content>
        </section>
    `
})
export class SectionComponent {
    @Input() bg: string;
    @Input() idi: string;
}
