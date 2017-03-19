import {Component, Input} from "@angular/core";
import {Rsvp, RsvpService} from "./rsvp.service";

@Component({
    selector: 'wg-rsvp-done',
    template: `
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">
                RSVP envoyée!
                <span class="badge badge-success" *ngIf="rsvp.confirmed">Confirmed</span>
                <span class="badge badge-danger" *ngIf="!rsvp.confirmed">Cancelled</span>
            </h4>
            <p>
                
                <strong>name:</strong> {{rsvp.name}}<br>
                <strong>email:</strong> {{rsvp.email}}<br>
                <strong>message:</strong> {{rsvp.message}}<br>
                <strong>date:</strong> {{rsvp.date}}<br>
            </p>
            <p>
                Nous vous tiendrons au courant si il y a des modifications!
            </p>
            <p class="mb-0">
                <button class="btn btn-sm" (click)="resetRsvp()">Cliquez ici pour recommencer votre RSVP</button>
            </p>
        </div>
    `
})
export class RsvpDoneComponent {

    @Input() rsvp: Rsvp;

    constructor(private _rsvpService: RsvpService) {

    }

    resetRsvp() {
        this._rsvpService.resetRsvp();
    }
}
