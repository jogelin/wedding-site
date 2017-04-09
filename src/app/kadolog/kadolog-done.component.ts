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
        <p class="mb-0">
            <button class="btn btn-primary btn-sm" (click)="editKadolog.emit()">Modifier votre participation</button>
        </p>
    `
})
export class KadologDoneComponent {

    @Input() kadolog: Kado[];
    @Output() editKadolog = new EventEmitter();

    constructor() {

    }
}
