import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {KadologService} from "./kadolog.service";
import {KadologFormComponent} from "./kadolog-form.component";
import {KadologListPageComponent} from "./kadolog-list-page.component";
import {KadologDoneComponent} from "./kadolog-done.component";


@NgModule({
    declarations: [
        KadologFormComponent,
        KadologDoneComponent,
        KadologListPageComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [KadologService],
    exports: [
        KadologFormComponent,
        KadologDoneComponent
    ]
})
export class KadologModule {
}
