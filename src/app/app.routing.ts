import {Routes, RouterModule} from "@angular/router";
import {SectionsPageComponent} from "./section/sections-page.component";
/**
 * Created by Joni on 28/12/2016.
 */

const routes: Routes = [
    {path: '', component: SectionsPageComponent}
];

export const RoutesModule = RouterModule.forRoot(routes);
