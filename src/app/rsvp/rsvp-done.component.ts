import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Guest} from "../guest/guest.model";

@Component({
    selector: 'wg-rsvp-done',
    template: `
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">
                RSVP envoyée!
                <span class="badge badge-success" *ngIf="guest?.confirmed">Je viens !</span>
                <span class="badge badge-danger" *ngIf="!guest?.confirmed">Je ne viens pas...</span>
            </h4>
            <p>

                <strong>name:</strong> {{guest?.name}}<br>
                <strong>email:</strong> {{guest?.email}}<br>
                <strong>message:</strong> {{guest?.message}}<br>
                <strong>date:</strong> {{guest?.updateDate | date:'medium'}}<br>
            </p>
            <p>
                Nous vous tiendrons au courant si il y a des modifications!
            </p>
            <p class="mb-0">
                <button class="btn btn-primary btn-sm" (click)="editRsvp.emit()">Modifier votre RSVP</button>
            </p>
        </div>
    `
})
export class RsvpDoneComponent {

    @Input() guest: Guest;
    @Output() editRsvp = new EventEmitter();

    constructor() {

    }


}
