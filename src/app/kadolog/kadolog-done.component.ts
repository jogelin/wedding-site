import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kado} from './kadolog.model';

@Component({
    selector: 'wg-kadolog-done',
    template: `
        <div class="row justify-content-md-center">
            <h3>Participation enregistrée!</h3>
        </div>
        <div class="row justify-content-md-center">
            <p>
                Un énorme merci pour votre participation
            </p>
        </div>
        <div class="row justify-content-md-center">
            <div class="card card-basket mb-3" ngsReveal> 
                <div class="card-block p-1 pr-1">
                    <ul class="fa-ul mt-2">
                        <li *ngFor="let kado of currentGuestKado">
                            <i class="fa-li fa" [ngClass]="'fa-'+kado.$key"></i>
                            {{kado.title}} 
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        <div class="row justify-content-md-center">
            <p class="mb-0">
                <button class="btn btn-primary btn-sm" (click)="showSaveForm.emit()">Modifier votre participation</button>
            </p>
        </div>
    `
})
export class KadologDoneComponent {

    @Input() currentGuestKado: Kado[];
    @Output() showSaveForm = new EventEmitter();

    constructor() {

    }
}
