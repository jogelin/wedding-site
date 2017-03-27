import {Component, Input} from "@angular/core";
import {Rsvp, RsvpService} from "./kadolog.service";

@Component({
    selector: 'wg-kadolog-done',
    template: `
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">
                RSVP envoyée!
                <span class="badge badge-success" *ngIf="kadolog.confirmed">Je viens !</span>
                <span class="badge badge-danger" *ngIf="!kadolog.confirmed">Je ne viens pas...</span>
            </h4>
            <p>
                
                <strong>name:</strong> {{kadolog.name}}<br>
                <strong>email:</strong> {{kadolog.email}}<br>
                <strong>message:</strong> {{kadolog.message}}<br>
                <strong>date:</strong> {{kadolog.date | date:'medium'}}<br>
            </p>
            <p>
                Nous vous tiendrons au courant si il y a des modifications!
            </p>
            <p class="mb-0">
                <button class="btn btn-primary btn-sm" (click)="resetRsvp()">Cliquez ici pour recommencer votre RSVP</button>
            </p>    
        </div>
    `
})
export class RsvpDoneComponent {

    @Input() kadolog: Rsvp;

    constructor(private _kadologService: RsvpService) {

    }

    resetRsvp() {
        this._kadologService.resetRsvp();
    }
}
