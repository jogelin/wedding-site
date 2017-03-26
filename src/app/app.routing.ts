import {Routes, RouterModule} from "@angular/router";
import {SectionsPageComponent} from "./section/sections-page.component";
import {RsvpListPageComponent} from "./rsvp/rsvp-list-page.component";
/**
 * Created by Joni on 28/12/2016.
 */

const routes: Routes = [
    {path: '', component: SectionsPageComponent},
    {path: 'rsvp', component: RsvpListPageComponent}

];

export const RoutesModule = RouterModule.forRoot(routes);
