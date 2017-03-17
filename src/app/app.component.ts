import {Component} from '@angular/core';

@Component({
    selector: 'wg-root',
    styles:[`
    
    `],
    template: `        
        <!--<div class="h-100" ngsRevealSet [ngsSelector]="'.row'"> -->
        <div class="h-100"> 
            <wg-sections-page></wg-sections-page>
        </div>


        
    `
})
export class AppComponent {
}
