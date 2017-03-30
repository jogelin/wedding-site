import {Component, EventEmitter, Input, Output} from "@angular/core";
import {RsvpService} from "./domain/rsvp.service";
import {Rsvp} from "./domain/rsvp.model";

@Component({
    selector: 'wg-rsvp-done',
    template: `
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">
                RSVP envoyée!
                <span class="badge badge-success" *ngIf="rsvp.confirmed">Je viens !</span>
                <span class="badge badge-danger" *ngIf="!rsvp.confirmed">Je ne viens pas...</span>
            </h4>
            <p>
                
                <strong>name:</strong> {{rsvp.name}}<br>
                <strong>email:</strong> {{rsvp.email}}<br>
                <strong>message:</strong> {{rsvp.message}}<br>
                <strong>date:</strong> {{rsvp.date | date:'medium'}}<br>
            </p>
            <p>
                Nous vous tiendrons au courant si il y a des modifications!
            </p>
            <p class="mb-0">
                <button class="btn btn-primary btn-sm" (click)="editRsvp">Cliquez ici pour modifier votre RSVP</button>
            </p>    
        </div>
    `
})
export class RsvpDoneComponent {

    @Input() rsvp: Rsvp;
    @Output() editRsvp = new EventEmitter();

    constructor() {

    }
}
