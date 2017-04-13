import {Component, Input} from "@angular/core";


@Component({
    selector: 'wg-kadolog-form',
    template: `
        <div class="row">
            <div class="col-sm-12 col-md-4 offset-md-4 text-center">
                <h3>Envie de contribuer à cette journée ?</h3>
            </div>
        </div>
        <hr>
        <div class="row" *ngIf="!hasKadologed">
            <div class="col text-center">
                <p>
                    Le plus beau des cadeaux pour nous serait de construire la fête avec vous.
                </p>
                <p>
                    Vous souhaitez apporter votre touche? Un coup de main, le choix d'une musique ou votre bonne humeur
                    légendaire nous comblerait...
                </p>
                <p>
                    Vous préferez agrémenter le joli buffet? Vous pourriez apporter un fromage, une bouteille de vin ou
                    même une gourmandise.
                </p>
                <p>
                    Et si vous souhaitez nous gâter autrement, vous trouverez ci-dessous
                    quelques idées.
                </p>
            </div>
        </div>
        <hr *ngIf="!hasKadologed">
        <div class="row">
            <div class="col">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class KadologFormComponent {
    @Input() hasKadologed: boolean;
}
