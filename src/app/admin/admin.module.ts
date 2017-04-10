import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AdminPageComponent} from './admin-page.component';
import {GuestModule} from '../guest/guest.module';
import {RoutesModule} from './admin.routing';
import {GuestListComponent} from './guest-list.component';
import {KadologReportComponent} from './kadolog-report.component';


@NgModule({
    declarations: [
        AdminPageComponent,
        GuestListComponent,
        KadologReportComponent
    ],
    imports: [
        SharedModule,
        GuestModule,
        RoutesModule
    ]
})
export class AdminModule {
}
