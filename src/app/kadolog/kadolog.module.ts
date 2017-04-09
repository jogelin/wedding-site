import {NgModule} from "@angular/core";
import {KadologDoneComponent} from "./kadolog-done.component";
import {SharedModule} from "../shared/shared.module";
import {GuestModule} from "../guest/guest.module";
import {KadologService} from "./kadolog.service";
import {EffectsModule} from "@ngrx/effects";
import {KadologEffects} from "./kadolog.effects";
import {KadologNotAvailableComponent} from "./kadolog-not-available.component";
import {KadologFormSaveComponent} from "./kadolog-form-save.component";
import {KadologFormComponent} from "./kadolog-form.component";


@NgModule({
    declarations: [
        KadologFormComponent,
        KadologNotAvailableComponent,
        KadologFormSaveComponent,
        KadologDoneComponent
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
        KadologNotAvailableComponent,
        KadologFormSaveComponent,
        KadologDoneComponent
    ]
})
export class KadologModule {
}
