import {Component, Input} from '@angular/core';

@Component({
    selector: 'wg-section',
    template: `
        <section [ngClass]="bg">
            <div class="container">
                <ng-content></ng-content>
            </div>
        </section>
    `
})
export class SectionComponent {
    @Input() bg: string;
}
