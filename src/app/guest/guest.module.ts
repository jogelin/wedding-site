import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {EffectsModule} from "@ngrx/effects";
import {GuestEffects} from "./guest.effects";
import {GuestService} from "./guest.service";
import {GuestListComponent} from "./guest-list.component";


@NgModule({
    declarations: [
        GuestListComponent
    ],
    imports: [
        SharedModule,
        EffectsModule.run(GuestEffects)
    ],
    providers: [GuestService],
    exports: [
        GuestListComponent
    ]
})
export class GuestModule {
}
