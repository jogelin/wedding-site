import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Guest} from "../guest/guest.model";

@Component({
    selector: 'wg-rsvp-done',
    template: `
        <div class="row">
            <div class="col">
                <h3>RSVP envoyée!</h3>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <p>
                    Nous vous tiendrons au courant si il y a des modifications!
                </p>
                <p class="mb-0">
                    <button class="btn btn-primary btn-sm" (click)="editRsvp.emit()">Modifier votre RSVP</button>
                </p>
            </div>
        </div>
    `
})
export class RsvpDoneComponent {

    @Input() guest: Guest;
    @Output() editRsvp = new EventEmitter();

    constructor() {

    }


}
