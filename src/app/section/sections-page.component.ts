import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromRoot from "../app.reducer";
import {UpdateAction} from "../scope/scope.actions";

@Component({
    selector: 'wg-sections-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['sections-page.component.scss'],
    template: `
        <section id="aline-et-jonathan">
            <div class="d-flex flex-column justify-content-start align-items-stretch align-content-stretch h-100 w-100">
                <div id="fanion"></div>
                <div class="d-flex align-content-center" style="flex: 1" ngsReveal>
                    <div class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 align-self-center">
                        <img src="../../assets/aline_et_jonathan.svg" class="img-responsive img-fluid" alt="Responsive image">
                    </div>
                </div>
                <div>
                    <div class="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                        <img src="../../assets/verrerie.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
            </div>
        </section>
        <section id="where" class="section-padding">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-sm-12 col-md-10 offset-md-1" ngsReveal>
                        <img src="../../assets/vous_invit.svg" class="img-fluid" alt="Responsive image" >
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-10 offset-md-1" ngsReveal>
                        <img src="../../assets/where.svg" class="img-fluid" alt="Responsive image" >
                    </div>
                </div>
            </div>
        </section>
        <wg-section-part idi="civil" *ngIf="tadaaam$ | async">
            <div class="row">
                <div class="col-sm-12">
                    <p>Notre mariage civil se déroulera à l'hôtel de Ville de la Grand Place de Bruxelles.</p>
                    <p>Nous nous réunirons tous à 9h45 sur la place et il sera possible de garer 3 voitures devant.
                        (Nous vous tiendrons informés de l'organisation)</p>
                    <p>Une fois mariés sous vos yeux et ceux de la loi, direction Braine-Le-Comte pour un petit
                        pique-nique tous ensemble avant la célébration.</p>
                </div>
            </div>
        </wg-section-part>
        <wg-section-part idi="celeb" *ngIf="tadaam$ | async">
            <div class="row">
                <div class="col-sm-12">
                    <p>A 14h00, la célébration de notre mariage se déroulera... en forêt, dans le bois de la Houssière à
                        Braine-le-comte.<br>
                        Les souliers plats seront donc de mise ! Pensez à prévoir une paire
                        de rechange pour le reste de la journée au propre. <br>
                        Un parking aux abords de la forêt sera à votre disposition. Il est trop petit pour acceuillir
                        toutes les voitures. N'hésitez donc pas à vous rassembler au parking gratuit de la gare (idem
                        salle) pour covoiturer vers le bois. </p>
                    <p>Nous pourrons ensuite trinquer à notre union à La Verrerie de Braine-Le-Comte et partager une
                        chouette journée tous ensemble.<br>

                        Notre plus grand plaisir serait de construire
                        cette journée ensoleillée avec vous! Nous aurons besoin de vous et de vos talents. En effet, le
                        repas du soir sera basé sur le principe de
                        l'auberge espagnole. Plus d'infos plus bas...</p>
                    <p>Pour votre tenue, faites-vous plaisir, rien de tel qu'un savant mélange de couleurs et de
                        décontraction !</p>
                </div>
            </div>
        </wg-section-part>
        <wg-section-part idi="soiree" *ngIf="tadam$ | async">
            <div class="row">
                <div class="col-sm-4">
                    Venez fêter cette belle soirée dans La Verrerie de Braine-Le-Comte dès 21h!<br>
                    Il y en aura pour tous les goûts : danse, jeux, bar,... De quoi partager un chouette moment tous
                    ensemble!
                </div>
                <div class="col-sm-4">
                    Pour les plus vaillants, nous pourrons camper dans la cour de La Verrerie ou dormir dans la salle,
                    petit-déjeuner à la clé! ;)
                </div>
                <div class="col-sm-4">
                    Le parking gratuit de la gare sera à votre disposition.
                </div>
            </div>
        </wg-section-part>
        <wg-section-infos></wg-section-infos>
        <wg-section-rsvp></wg-section-rsvp>
        <wg-section-kadolog></wg-section-kadolog>
        <section id="contact">
            <div class="container">
                <div class="row text-center py-2">
                    <div class="col-sm-4 offset-sm-4">
                        <img src="../../assets/footer_aline_et_jonathan.svg" class="img-fluid" alt="Responsive image">
                        <img src="../../assets/footer_address.svg" class="img-fluid" alt="Responsive image">
                        <a href="mailto:jo.et.aline.tadaaam@gmail.com">jo.et.aline.tadaaam@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class SectionsPageComponent implements OnInit {
    tadaaam$: Observable<boolean>;
    tadaam$: Observable<boolean>;
    tadam$: Observable<boolean>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.tadaaam$ = this._store.select(fromRoot.isTadaaam);
        this.tadaam$ = this._store.select(fromRoot.isTadaam);
        this.tadam$ = this._store.select(fromRoot.isTadam);

        this._store.dispatch(new UpdateAction());
    }
}
