import {NgModule} from "@angular/core";
import {SectionsPageComponent} from "./sections-page.component";
import {NgsRevealModule} from "ng-scrollreveal";
import {SectionPartComponent} from "./section-part.component";
import {SectionRsvpComponent} from "./section-rsvp.component";
import {CommonModule} from "@angular/common";
import {RsvpModule} from "../rsvp/rsvp.module";


@NgModule({
    declarations: [
        SectionPartComponent,
        SectionRsvpComponent,
        SectionsPageComponent,
    ],
    imports: [
        NgsRevealModule,
        CommonModule,
        RsvpModule
    ],
    exports: [
        SectionsPageComponent
    ]
})
export class SectionModule {
}
