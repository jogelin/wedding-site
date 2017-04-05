import {Component, OnInit} from "@angular/core";
import * as fromRoot from "../app.reducer";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Guest} from "./guest.model";

@Component({
    selector: 'wg-guest-list',
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
                        <tr *ngFor="let guest of guest$ | async">
                            <th scope="row">{{guest.$key}}</th>
                            <td>{{guest.name}}</td>
                            <td>{{guest.email}}</td>
                            <td>
                                <i class="fa fa-ok" *ngIf="guest.validate"></i>
                                <i class="fa f" *ngIf="!guest.validate">Je ne viens pas...</i>
                            </td>
                            <td>{{guest.date | date:'medium'}}</td>
                            <td>{{guest.message}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class GuestListComponent implements OnInit {

    guest$: Observable<Guest[]>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {
        this.guest$ = this._store.select(fromRoot.getGuests);
    }
}
