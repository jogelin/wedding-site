import {NgModule} from "@angular/core";
import {KadologService} from "./kadolog.service";
import {KadologFormComponent} from "./kadolog-form.component";
import {KadologDoneComponent} from "./kadolog-done.component";
import {SharedModule} from "../shared/shared.module";
import {KadologListComponent} from "./kadolog-list.component";


@NgModule({
    declarations: [
        KadologFormComponent,
        KadologDoneComponent,
        KadologListComponent,
    ],
    imports: [
        SharedModule
    ],
    providers: [KadologService],
    exports: [
        KadologFormComponent,
        KadologDoneComponent
    ]
})
export class KadologModule {
}
