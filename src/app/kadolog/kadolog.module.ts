import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RsvpService} from "./kadolog.service";
import {RsvpFormComponent} from "./kadolog-form.component";
import {RsvpListPageComponent} from "./kadolog-list-page.component";
import {RsvpDoneComponent} from "./kadolog-done.component";


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
