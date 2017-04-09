import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Guest} from "../guest/guest.model";

@Component({
    selector: 'wg-rsvp-done',
    template: `
        <h3>RSVP envoyée!</h3>
        <p>
            Merci {{guest?.name}}, nous avons bien reçu votre réponse.
        </p>
        <p>
            Si il y a des modifications, nous vous tiendrons informé via email à l'adresse {{guest?.email}}
        </p>
        <p class="mb-0">
            <button class="btn btn-primary btn-sm" (click)="editRsvp.emit()">Modifier votre RSVP</button>
        </p>
    `
})
export class RsvpDoneComponent {

    @Input() guest: Guest;
    @Output() editRsvp = new EventEmitter();

    constructor() {

    }


}
