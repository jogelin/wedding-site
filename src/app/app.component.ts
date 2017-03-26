import {Component, OnInit} from '@angular/core';
import { environment } from '../environments/environment';


@Component({
    selector: 'wg-root',
    styles:[`
    
    `],
    template: `        
        <div *ngIf="!unConstruction" class="h-100" ngsRevealSet [ngsSelector]="'.row'"> 
            <router-outlet></router-outlet>
        </div>        
        <div *ngIf="unConstruction"> 
            UNDER CONSTRUCTION
        </div>
        
    `
})
export class AppComponent implements OnInit {

    unConstruction:boolean = true;

    ngOnInit(): void {
        this.unConstruction = environment.production;
    }
}
