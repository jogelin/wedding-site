import {RouterModule, Routes} from "@angular/router";
import {AdminPageComponent} from "./admin-page.component";
/**
 * Created by Joni on 28/12/2016.
 */

const routes: Routes = [
    {path: 'admin', component: AdminPageComponent}
];

export const RoutesModule = RouterModule.forChild(routes);
