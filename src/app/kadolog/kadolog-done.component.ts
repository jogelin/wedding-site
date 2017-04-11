import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kado} from './kadolog.model';

@Component({
    selector: 'wg-kadolog-done',
    template: `
        <div class="row">
            <div class="col text-center">
                <h3>Participation enregistrée!</h3>
                <p>
                    Un énorme merci pour votre participation
                </p>      
            </div>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-sm-4" ngsReveal>
                <hr> 
                Pour les participations d'ordre financière:<br> BE66 0000 0000 0000
                <hr>                
                Pour les participations de miam miam, nous vous recontacterons pour les détails pratiques
            </div>
            <div class="col-sm-4 flex-first flex-sm-unordered" ngsReveal>
                <div class="card card-basket">
                    <div class="row"> 
                        <div class="col">
                            <ul class="fa-ul mt-2">
                                <li *ngFor="let kado of currentGuestKado">
                                    <i class="fa-li fa" [ngClass]="'fa-'+kado.$key"></i>
                                    {{kado.title}} 
                                </li> 
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm text-center">
                            <p>
                                <button class="btn btn-primary btn-sm" (click)="showSaveForm.emit()">Modifier votre participation</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4" ngsReveal>
                <hr> 
                Pour les participations d'ordre financière:<br> BE66 0000 0000 0000
                <hr>                
                Pour les participations de miam miam, nous vous recontacterons pour les détails pratiques
            </div>
        </div>
    `
})
export class KadologDoneComponent {

    @Input() currentGuestKado: Kado[];
    @Output() showSaveForm = new EventEmitter();

    constructor() {

    }
}
