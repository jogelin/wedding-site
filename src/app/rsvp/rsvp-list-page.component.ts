import {Component, OnInit} from "@angular/core";
import {RsvpService, Rsvp} from "./rsvp.service";
import {Observable} from "rxjs";

@Component({
    selector: 'wg-rsvp-page',
    template: `

            <div class="container">
                <div class="row">
                    <div class="col"> 
                        {{rsvps$ | async}}
                    </div>
                </div>
            </div> 
    `
})
export class RsvpListPageComponent implements OnInit {

    rsvps$: Observable<Rsvp[]>;

    constructor(private _rsvpService: RsvpService) {
    }

    ngOnInit(): void {
        this.rsvps$ = Observable.from(this._rsvpService.loadRsvps());
    }
}
