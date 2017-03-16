import {Component} from '@angular/core';

@Component({
    selector: 'wg-sections-page',
    styleUrls: ['sections-page.component.scss'],
    template: `
        <nav class="navbar bg-yellow"></nav>
        <wg-section [bg]="'bg-yellow'">
            <div class="row">
                <div class="col">
                    <img src="assets/aline_et_jonathan.svg" class="img-fluid" alt="Responsive image">
                </div>
            </div>
        </wg-section>
        <wg-section [bg]="'bg-yellow'">
            <div class="row">
                <div class="col">
                    <img src="assets/invit.svg" class="img-fluid" alt="Responsive image">
                </div>
            </div>
        </wg-section>
    `
})
export class SectionsPageComponent {
}
