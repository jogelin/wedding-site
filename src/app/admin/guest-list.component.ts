import {Component, Input} from '@angular/core';
import {Guest} from '../guest/guest.model';

@Component({
    selector: 'wg-guest-list',
    styles: [`
        :host {
            font-size:12px;
        }
    `],
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <table class="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Scope</th>
                            <th>Creation/Update</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let guest of guests">
                            <th>
                                <i title="{{guest.$key}}" class="fa fa-2x" [class.fa-check-square-o]="guest.confirmed" [class.fa-ban]="!guest.confirmed"></i>
                            </th>
                            <td>{{guest.name}}</td>
                            <td>{{guest.email}}</td>
                            <td>{{guest.message}}</td>
                            <td>{{guest.scope}}</td>
                            <td>{{guest.creationDate | date:'medium'}}<br>{{guest.updateDate | date:'medium'}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class GuestListComponent {

    @Input() guests: Guest[];
}
