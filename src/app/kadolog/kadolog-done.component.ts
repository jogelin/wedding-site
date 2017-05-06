import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DoneDescription, Kado} from './kadolog.model';

@Component({
    selector: 'wg-kadolog-done',
    template: `
        <div class="row justify-content-md-center">
            <div class="col-sm-4" ngsReveal>
                <hr class="hidden-sm-up">
                <h3>Participation enregistrée!</h3>
                <strong>
                    Un énorme merci pour votre participation.
                </strong>
                <hr>
                Nous sommes impatients de partager cette merveilleuse journée avec vous!
                <hr>
                N'hésitez pas à nous contacter si vous avez la moindre question ;-)
            </div>
            <div class="col-sm-4" ngsReveal>
                <hr class="hidden-sm-up">
                Pour tout ce qui concerne le buffet, nous vous contacterons pour les détails pratiques.                
                <hr>
                Vous avez choisi de nous gâter, encore merci! <small>BE49 0017 9105 3971</small>
                <hr>
                Pour l'association, vous pouvez trouver plus d'informations sur le site <a target="_blank" href="https://aideautiersmonde.cathocambrai.com/">"Aide aux missions"</a>.<br>
                Si vous voulez participer, vous pouvez effectuer un don sur:<br>
                <small>IBAN FR76 3000 4005 2600 0100 1910 790<br>BIC BNPA FR PP XXX</small>
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
                                <button class="btn btn-primary btn-sm" (click)="showSaveForm.emit()">Modifier votre
                                    participation
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
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
