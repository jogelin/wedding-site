import {NgModule} from "@angular/core";
import {SectionsPageComponent} from "./sections-page.component";
import {NgsRevealModule} from "ng-scrollreveal";
import {SectionPartComponent} from "./section-part.component";
import {SectionRsvpComponent} from "./section-rsvp.component";
import {CommonModule} from "@angular/common";
import {RsvpModule} from "../rsvp/rsvp.module";
import {SectionInfosComponent} from "./section-infos.component";
import { AgmCoreModule } from 'angular2-google-maps/core';
import {ScopeService} from "../scope/scope.service";
import {KadologModule} from "../kadolog/kadolog.module";
import {SectionKadologComponent} from "./section-kadolog.component";


@NgModule({
    declarations: [
        SectionPartComponent,
        SectionRsvpComponent,
        SectionKadologComponent,
        SectionInfosComponent,
        SectionsPageComponent
    ],
    imports: [
        NgsRevealModule,
        CommonModule,
        RsvpModule,
        KadologModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBFb9msSny826dPVGG0E_YzczhC7DiXiw4'
        })
    ],
    providers: [
        ScopeService
    ],
    exports: [
        SectionsPageComponent
    ]
})
export class SectionModule {
}
