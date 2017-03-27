import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {AdminPageComponent} from "./admin-page.component";


@NgModule({
    declarations: [
        AdminPageComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        AdminPageComponent
    ]
})
export class AdminModule {
}
