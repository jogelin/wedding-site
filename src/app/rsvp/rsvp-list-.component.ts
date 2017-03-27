import {Component, OnInit} from "@angular/core";
import {RsvpService, Rsvp} from "./rsvp.service";
import {Observable} from "rxjs";

@Component({
    selector: 'wg-rsvp-list',
    template: `

            <div class="container">
                <div class="row">
                    <div class="col">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Confirmed</th>
                                <th>Date</th>
                                <th>Message</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr *ngFor="let rsvp of rsvps$ | async">
                                <th scope="row">{{rsvp.$key}}</th>
                                <td>{{rsvp.name}}</td>
                                <td>{{rsvp.email}}</td>
                                <td>
                                    <i class="fa fa-ok" *ngIf="rsvp.confirmed"></i>
                                    <i class="fa f" *ngIf="!rsvp.confirmed">Je ne viens pas...</i>
                                </td>
                                <td>{{rsvp.date | date:'medium'}}</td>
                                <td>{{rsvp.message}}</td>
                            </tr>
                            </tbody>
                        </table>
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
