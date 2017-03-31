import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SectionModule} from "./section/section.module";
import {NgsRevealModule} from "ng-scrollreveal";
import {AngularFireModule} from "angularfire2";
import {RoutesModule} from "./app.routing";
import {AdminModule} from "./admin/admin.module";
import { StoreModule } from '@ngrx/store';
import {reducer} from "./app.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ScopeModule} from "./scope/scope.module";


export const firebaseConfig = {
    apiKey: "AIzaSyAm4Az92FGvQwD3e2trw8b0dhL9z1nNTYw",
    authDomain: "wedding-site-b47ff.firebaseapp.com",
    databaseURL: "https://wedding-site-b47ff.firebaseio.com",
    storageBucket: "wedding-site-b47ff.appspot.com",
    messagingSenderId: "512076777662"
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RoutesModule,

        NgsRevealModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),

        ScopeModule,

        SectionModule,
        AdminModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
