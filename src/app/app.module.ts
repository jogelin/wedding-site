import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SectionModule} from "./section/section.module";
import {NgsRevealModule} from "ng-scrollreveal";
import {AngularFireModule} from "angularfire2";

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
        SectionModule,
        NgsRevealModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
