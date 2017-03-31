import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {EffectsModule} from "@ngrx/effects";
import {GuestEffects} from "./guest.effects";
import {GuestService} from "./guest.service";


@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        EffectsModule.run(GuestEffects)
    ],
    providers: [GuestService]
})
export class GuestModule {
}
