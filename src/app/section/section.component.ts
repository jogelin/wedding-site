import {Component} from '@angular/core';

@Component({
    selector: 'wg-section',
    template: `
        <section>
            <ng-content></ng-content>
        </section>
    `
})
export class SectionComponent {
}
