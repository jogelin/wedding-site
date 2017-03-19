import {NgModule} from "@angular/core";
import {SectionComponent} from "./section.component";
import {SectionsPageComponent} from "./sections-page.component";
import {NgsRevealModule} from "ng-scrollreveal";
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SectionRSVPComponent} from "./rsvp.component";


@NgModule({
    declarations: [
        SectionComponent,
        SectionRSVPComponent,
        SectionsPageComponent,
    ],
    imports: [
        NgsRevealModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SectionsPageComponent
    ]
})
export class SectionModule {
}
