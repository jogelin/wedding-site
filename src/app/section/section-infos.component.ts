import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RsvpService, Rsvp} from "../rsvp/rsvp.service";

// just an interface for type safety.
export interface Marker {
    lat: number;
    lng: number;
    label: string;
    address: string;
}


@Component({
    selector: 'wg-section-infos',
    styles:[`
        :host /deep/ .sebm-google-map-container {
            height: 300px;
        }    
    `],
    template: `
        <section id="infos">
                <div class="row">  
                    <div class="col"> 
                        Infos utiles
                    </div>
                </div>
                <hr>

                <sebm-google-map [latitude]="lat" [longitude]="lng">
                
                    <sebm-google-map-marker 
                        *ngFor="let m of markers; let i = index"
                        [latitude]="m.lat"
                        [longitude]="m.lng"
                        [label]="m.label">
                        
                    </sebm-google-map-marker>
                </sebm-google-map>

        </section> 
    `
})
export class SectionInfosComponent implements OnInit {

    markers: Marker[] = [
        {
            lat: 50.602647,
            lng: 4.134452,
            label: 'La Verrerie',
            address: 'Rue de l’Industrie, 11\n7090 Braine-le-Comte'
        },
        {
            lat: 50.603788,
            lng: 4.136235,
            label: 'Parking de la Gare',
            address: 'Rue de l’Industrie, 2\n7090 Braine-le-Comte'
        },
        {
            lat: 50.616484,
            lng: 4.176258,
            label: 'Parking du Bois',
            address: 'Allée de la Dinzelle 43\n7090 Braine-le-Comte'
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'Parking Bois',
            address: ''
        }
    ];

    constructor() {
    }

    ngOnInit(): void {


    }
}
