import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import * as fromRoot from "../app.reducer";


// just an interface for type safety.
export interface Marker {
    lat: number;
    lng: number;
    label: string;
    address: string;
}

export interface Map {
    name: string;
    lat: number;
    lng: number;
    zoom: number;
    markers: Marker[];
}


@Component({
    selector: 'wg-section-infos',
    styles: [`
        :host /deep/ .sebm-google-map-container {
            height: 300px;
        }
    `],
    template: `
        <section id="infos" class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card-deck">
                            <div class="card mb-1" *ngFor="let map of maps">
                                <sebm-google-map [latitude]="map.lat" [longitude]="map.lng" [zoom]="map.zoom">
                                    <sebm-google-map-marker
                                        *ngFor="let m of map.markers"
                                        [latitude]="m.lat"
                                        [longitude]="m.lng"
                                        [label]="m.label"
                                        disableDefaultUI="true">
                                    </sebm-google-map-marker>
                                </sebm-google-map>
                                <div class="card-footer">
                                    <h3 class="card-title">{{map.name}}</h3>
                                    <small class="text-muted" [innerHtml]="map.markers[0].address">Last updated 3 mins
                                        ago
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class SectionInfosComponent implements OnInit {
    maps: Map[] = [];

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this._store.select(fromRoot.isTadaaam)
            .filter(val => val)
            .subscribe(val =>
                this.maps.push({
                    name: 'Civil - Bruxelles',
                    lat: 50.846798,
                    lng: 4.352414,
                    zoom: 17,
                    markers: [
                        {
                            lat: 50.846798,
                            lng: 4.352414,
                            label: 'Parking Grand Place',
                            address: 'Parking Grand Place<br>1000 Bruxelles<br>&nbsp;'
                        }
                    ]
                })
            );
        this._store.select(fromRoot.isTadaam)
            .filter(val => val)
            .subscribe(val =>
                this.maps.push({
                    name: 'Célébration - Bois de la Houssière',
                    lat: 50.616484,
                    lng: 4.176258,
                    zoom: 16,
                    markers: [
                        {
                            lat: 50.616484,
                            lng: 4.176258,
                            label: 'Parking du Bois',
                            address: 'Allée de la Dinzelle 43<br>7090 Braine-le-Comte<br>&nbsp;'
                        }
                    ]
                })
            );
        this._store.select(fromRoot.isTadam)
            .filter(val => val)
            .subscribe(val =>
                this.maps.push({
                    name: 'La Verrerie - Braine-Le-Comte',
                    lat: 50.603813,
                    lng: 4.135844,
                    zoom: 16,
                    markers: [
                        {
                            lat: 50.603813,
                            lng: 4.135844,
                            label: 'La Verrerie',
                            address: 'Parking gratuit de la gare<br>Rue de l’Industrie, 11<br>7090 Braine-le-Comte'
                        }
                    ]
                })
            );
    }
}
