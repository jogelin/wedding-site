import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Rsvp, RsvpService} from "../rsvp/rsvp.service";

@Component({
    selector: 'wg-admin-page',
    template: `        
            <div class="container">
                <div class="row">
                    <div class="col">
                        <wg-rsvp-list></wg-rsvp-list>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <wg-kadolog-list></wg-kadolog-list>
                    </div>
                </div>
            </div> 
    `
})
export class AdminPageComponent implements OnInit {

    rsvps$: Observable<Rsvp[]>;

    constructor(private _rsvpService: RsvpService) {
    }

    ngOnInit(): void {
        this.rsvps$ = Observable.from(this._rsvpService.loadRsvps());
    }
}
