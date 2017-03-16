import {Component} from '@angular/core';

@Component({
    selector: 'wg-root',
    template: `        
        <div ngsRevealSet [ngsSelector]="'.row'">
            <wg-sections-page></wg-sections-page>
        </div>
    `
})
export class AppComponent {
}
