import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';


@Component({
    selector: 'wg-sections-page',
    styleUrls: ['sections-page.component.scss'],
    template: `
        <section id="aline-et-jonathan">
            <div class="d-flex flex-column justify-content-start align-items-stretch align-content-stretch h-100 w-100">
                <div id="fanion"></div>
                <div class="d-flex align-content-center" style="flex: 1">
                    <div class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 align-self-center">
                        <img src="../../assets/aline_et_jonathan.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
                <div>
                    <div class="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                        <img src="../../assets/verrerie.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
            </div>
        </section>
        <section id="where">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-sm-12 col-md-10 offset-md-1">
                        <img src="../../assets/vous_invit.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-10 offset-md-1">
                        <img src="../../assets/where.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
            </div>
        </section> 
        <wg-section-part idi="civil" *ngIf="tadaaam">
            <div class="row">
                <div class="col-sm-4">
                    Le mariage civil se déroulera sur la grand place de bruxelles. 
                </div>
                <div class="col-sm-4">
                    Essayer au maximum de covoiturer car il faudra se garer aux alentours (plus de détails prochainement)
                </div>
                <div class="col-sm-4">
                    <h3>Infos Pratiques</h3>
                    Ensuite nous irons directement à la verrerie manger un bout en attendant la cérémonie
                </div>
            </div>
        </wg-section-part>  
        <wg-section-part idi="celeb" *ngIf="tadaam">
            <div class="row">
                <div class="col-sm-12">
                    <p>La cérémonie se déroulera dans le bois de la houssière à Braine-le-compte. </p>
                    <p>Il y a un parking prévu mais essayer au maximum de covoiturer car le parking est petit. Vous pouvez vous regrouper au parking de la gare avant pour laisser les voitures en trop.</p>
                    <p>Prenez des chaussures de marche ou des bottes si il pleut !</p>
                    <p>Ensuite nous irons directement à la verrerie pour boire un verre, manger et passer une chouette fin de journée</p>
                </div>
            </div>
        </wg-section-part>  
        <wg-section-part idi="soiree" *ngIf="tadam">
            <div class="row">
                <div class="col-sm-4">
                    La soirée se déroulera dans l'ancienne verrerie de braine de le compte
                </div>
                <div class="col-sm-4">
                    Vous pouvez vous garer au parking de la gare
                </div>
                <div class="col-sm-4"> 
                    Il y en aura pour tous les goûts : danse, jeux, etc... 
                </div>
            </div>
        </wg-section-part> 
        <wg-section-rsvp></wg-section-rsvp> 
        <section id="gift">
            <div class="container">
                <div class="row">
                    <div class="col">
                        Cadeau log
                    </div>
                </div>
            </div>
        </section>   
        <wg-section-infos></wg-section-infos> 
        <section id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-4 offset-4">
                        <img src="../../assets/footer_aline_et_jonathan.svg" class="img-fluid" alt="Responsive image">
                        <img src="../../assets/footer_address.svg" class="img-fluid" alt="Responsive image">
                        <img src="../../assets/footer_email.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
            </div>
        </section> 
    `
})
export class SectionsPageComponent implements OnInit {

    tadam: boolean = false;
    tadaam: boolean = false;
    tadaaam: boolean = false;

    ngOnInit(): void {
        const hostname = window.location.host.split('.')[0];
        const localhost = hostname.indexOf('localhost') != -1;

        if(environment.production) {
            this.tadaaam = hostname.indexOf('tadaaam') != -1;
            this.tadaam = this.tadaaam || hostname.indexOf('tadaam') != -1;
            this.tadam = this.tadaam || hostname.indexOf('tadam') != -1;
        } else {
            this.tadam = this.tadaam = this.tadaaam = true;
        }
    }
}
