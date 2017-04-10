import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgsRevealModule} from 'ng-scrollreveal';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgsRevealModule

    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        NgsRevealModule
    ]
})
export class SharedModule {
}

