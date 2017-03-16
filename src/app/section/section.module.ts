import {NgModule} from "@angular/core";
import {SectionComponent} from "./section.component";
import {SectionsPageComponent} from "./sections-page.component";
import {NgsRevealModule} from "ng-scrollreveal";
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        SectionComponent,
        SectionsPageComponent
    ],
    imports: [
        NgsRevealModule,
        CommonModule
    ],
    exports: [
        SectionsPageComponent
    ]
})
export class SectionModule {
}
