import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Guest} from "../guest/guest.model";

@Component({
    selector: 'wg-rsvp-form',
    template: `
        <div class="row">
            <div class="col-sm-12 col-md-4 offset-md-4">
                <img src="../../assets/rsvp_title.svg" alt="Responsive image">
            </div>  
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class RsvpFormComponent {
}
