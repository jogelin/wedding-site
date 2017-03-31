import {NgModule} from "@angular/core";
import {RsvpFormComponent} from "./rsvp-form.component";
import {RsvpDoneComponent} from "./rsvp-done.component";
import {RsvpListComponent} from "./rsvp-list.component";
import {SharedModule} from "../shared/shared.module";
import {GuestModule} from "../guest/guest.module";


@NgModule({
    declarations: [
        RsvpFormComponent,
        RsvpDoneComponent,
        RsvpListComponent
    ],
    imports: [
        SharedModule,
        GuestModule
    ],
    exports: [
        RsvpFormComponent,
        RsvpDoneComponent,
        RsvpListComponent
    ]
})
export class RsvpModule {
}
