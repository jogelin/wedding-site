import {Component, OnInit} from "@angular/core";
import * as fromRoot from "../app.reducer";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Guest} from "../guest/guest.model";

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
                        <tr *ngFor="let rsvp of guest$ | async">
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
export class RsvpListComponent implements OnInit {

    guest$: Observable<Guest[]>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.guest$ = this._store.select(fromRoot.getGuests);
    }
}
