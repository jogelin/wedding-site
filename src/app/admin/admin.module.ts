import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {AdminPageComponent} from "./admin-page.component";
import {RsvpModule} from "../rsvp/rsvp.module";
import {GuestModule} from "../guest/guest.module";
import {RoutesModule} from "./admin.routing";


@NgModule({
    declarations: [
        AdminPageComponent,
    ],
    imports: [
        SharedModule,
        GuestModule,
        RoutesModule
    ]
})
export class AdminModule {
}
