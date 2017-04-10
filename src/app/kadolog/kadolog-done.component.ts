import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Guest} from "../guest/guest.model";
import {Kado} from "./kadolog.model";

@Component({
    selector: 'wg-kadolog-done',
    template: `
        <h3>Participation enregistrée!</h3>
        <p>
            Un énorme merci pour votre participation
        </p>
        <ul class="fa-ul mt-2">
            <li *ngFor="let kado of currentGuestKado">
                <i class="fa-li fa" [ngClass]="'fa-'+kado.$key"></i>
                {{kado.title}}
            </li>
        </ul>
        <p class="mb-0">
            <button class="btn btn-primary btn-sm" (click)="showSaveForm.emit()">Modifier votre participation</button>
        </p>
    `
})
export class KadologDoneComponent {

    @Input() currentGuestKado: Kado[];
    @Output() showSaveForm = new EventEmitter();

    constructor() {

    }
}
