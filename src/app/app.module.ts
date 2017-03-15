import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SectionModule} from "./section/section.module";
import {NgsRevealModule} from "ng-scrollreveal";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SectionModule,
        NgsRevealModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
