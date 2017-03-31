import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {EffectsModule} from "@ngrx/effects";
import {ScopeEffects} from "./scope.effects";
import {ScopeService} from "./scope.service";


@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        EffectsModule.run(ScopeEffects)
    ],
    providers: [ScopeService]
})
export class ScopeModule {
}
