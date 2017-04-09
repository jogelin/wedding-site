import {NgModule} from "@angular/core";
import {RsvpFormComponent} from "./rsvp-form.component";
import {RsvpDoneComponent} from "./rsvp-done.component";
import {SharedModule} from "../shared/shared.module";
import {GuestModule} from "../guest/guest.module";
import {RsvpFormLoadComponent} from "./rsvp-form-load.component";
import {RsvpFormSaveComponent} from "./rsvp-form-save.component";


@NgModule({
    declarations: [
        RsvpFormComponent,
        RsvpFormLoadComponent,
        RsvpFormSaveComponent,
        RsvpDoneComponent
    ],
    imports: [
        SharedModule,
        GuestModule
    ],
    exports: [
        RsvpFormComponent,
        RsvpFormLoadComponent,
        RsvpFormSaveComponent,
        RsvpDoneComponent
    ]
})
export class RsvpModule {
}
