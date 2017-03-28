import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RsvpService} from "./domain/rsvp.service";
import {RsvpFormComponent} from "./rsvp-form.component";
import {RsvpListPageComponent} from "./rsvp-list-page.component";
import {RsvpDoneComponent} from "./rsvp-done.component";


@NgModule({
    declarations: [
        RsvpFormComponent,
        RsvpDoneComponent,
        RsvpListPageComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [RsvpService],
    exports: [
        RsvpFormComponent,
        RsvpDoneComponent
    ]
})
export class RsvpModule {
}
