import {Component} from '@angular/core';

@Component({
    selector: 'wg-root',
    template: `
        <nav class="navbar fixed-top bg-yellow">
        </nav> 
        <section class="bg-yellow">
            <img src="assets/aline_et_jonathan.svg" class="img-fluid" alt="Responsive image" width="50%"> 
        </section>
        <div ngsRevealSet [ngsSelector]="'.row'">
            <wg-sections-page></wg-sections-page>
        </div>
    `
})
export class AppComponent {
}
