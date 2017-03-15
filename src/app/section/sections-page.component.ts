import {Component} from '@angular/core';

@Component({
    selector: 'wg-sections-page',
    styles: [`
        wg-section {
            padding: 3rem 0.5rem;
        }
    `],
    template: `



        <div class="row">   
            <div class="col">
                <wg-section>
                    <img src="assets/fanion.svg" class="img-fluid" alt="Responsive image">
                </wg-section>
            </div>
        </div>
        <div class="row">   
            <div class="col">
                <wg-section>
                    <img src="assets/fanion.svg" class="img-fluid" alt="Responsive image">
                </wg-section>
            </div>
        </div>
    `
})
export class SectionsPageComponent {
}
