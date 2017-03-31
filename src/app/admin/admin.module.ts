import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {AdminPageComponent} from "./admin-page.component";
import {RsvpModule} from "../rsvp/rsvp.module";


@NgModule({
    declarations: [
        AdminPageComponent,
    ],
    imports: [
        SharedModule,
        RsvpModule
    ],
    exports: [
        AdminPageComponent
    ]
})
export class AdminModule {
}
