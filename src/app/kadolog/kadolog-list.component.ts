import {Component, OnInit} from "@angular/core";
import {KadologService, Kadolog} from "./kadolog.service";
import {Observable} from "rxjs";

@Component({
    selector: 'wg-kadolog-page',
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
                            <tr *ngFor="let kadolog of kadologs$ | async">
                                <th scope="row">{{kadolog.$key}}</th>
                                <td>{{kadolog.name}}</td>
                                <td>{{kadolog.email}}</td>
                                <td>
                                    <i class="fa fa-ok" *ngIf="kadolog.confirmed"></i>
                                    <i class="fa f" *ngIf="!kadolog.confirmed">Je ne viens pas...</i>
                                </td>
                                <td>{{kadolog.date | date:'medium'}}</td>
                                <td>{{kadolog.message}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
    `
})
export class KadologListComponent implements OnInit {

    kadologs$: Observable<Kadolog[]>;

    constructor(private _kadologService: KadologService) {
    }

    ngOnInit(): void {
        this.kadologs$ = Observable.from(this._kadologService.loadKadologs());
    }
}
