import {NgModule} from "@angular/core";
import {SectionComponent} from "./section.component";
import {SectionsPageComponent} from "./sections-page.component";
import {NgsRevealModule} from "ng-scrollreveal";

@NgModule({
    declarations: [
        SectionComponent,
        SectionsPageComponent
    ],
    imports: [
        NgsRevealModule
    ],
    exports: [
        SectionsPageComponent
    ]
})
export class SectionModule {
}
