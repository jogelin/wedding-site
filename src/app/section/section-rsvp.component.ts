import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RsvpService, Rsvp} from "../rsvp/domain/rsvp.service";

@Component({
    selector: 'wg-section-rsvp',
    template: `
        <section id="rsvp" class="section-padding">
            <div class="container">
                <div class="row">
                    <img src="../../assets/rsvp_title.svg" class="col-sm-12 col-md-6 offset-md-3" alt="Responsive image">
                </div>
                <hr>
                <div class="row">
                    <div class="col"> 
                        <wg-rsvp-form *ngIf="!(hasRsvp$ | async)"></wg-rsvp-form>
                        <wg-rsvp-done *ngIf="hasRsvp$ | async" [rsvp]="rsvp$ | async"></wg-rsvp-done>
                    </div>
                </div>
            </div> 
        </section>
    `
})
export class SectionRsvpComponent implements OnInit {
    rsvp$: Observable<Rsvp>;
    hasRsvp$: Observable<boolean>;

    constructor(private _rsvpService: RsvpService) {
    }

    ngOnInit(): void {
        this.rsvp$ = Observable.from(this._rsvpService.currentRsvp$)
        this.hasRsvp$ = Observable.from(this._rsvpService.currentRsvp$)
            .map(rsvp => rsvp !== null);

    }
}
