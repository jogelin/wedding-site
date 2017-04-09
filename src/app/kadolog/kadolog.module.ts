import {NgModule} from "@angular/core";
import {KadologFormComponent} from "./kadolog-form.component";
import {KadologDoneComponent} from "./kadolog-done.component";
import {SharedModule} from "../shared/shared.module";
import {GuestModule} from "../guest/guest.module";
import {KadologService} from "./kadolog.service";
import {EffectsModule} from "@ngrx/effects";
import {KadologEffects} from "./kadolog.effects";
import {KadologNotAvailableComponent} from "./kadolog-not-available.component";


@NgModule({
    declarations: [
        KadologFormComponent,
        KadologDoneComponent,
        KadologNotAvailableComponent
    ],
    imports: [
        SharedModule,
        GuestModule,
        EffectsModule.run(KadologEffects)

    ],
    providers: [
        KadologService
    ],
    exports: [
        KadologFormComponent,
        KadologDoneComponent
    ]
})
export class KadologModule {
}
