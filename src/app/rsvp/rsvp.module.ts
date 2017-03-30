import {NgModule} from "@angular/core";

import {RsvpService} from "./domain/rsvp.service";
import {RsvpFormComponent} from "./rsvp-form.component";
import {RsvpDoneComponent} from "./rsvp-done.component";
import {RsvpListComponent} from "./rsvp-list.component";
import {EffectsModule} from "@ngrx/effects";
import {RsvpEffects} from "./domain/rsvp.effects";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [
        RsvpFormComponent,
        RsvpDoneComponent
    ],
    imports: [
        SharedModule,
        EffectsModule.run(RsvpEffects)
    ],
    providers: [RsvpService],
    exports: [
        RsvpFormComponent,
        RsvpDoneComponent
    ]
})
export class RsvpModule {
}
