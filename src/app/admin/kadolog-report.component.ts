import {Component, Input} from '@angular/core';
import {KadoReport} from './admin.model';

@Component({
    selector: 'wg-kadolog-report',
    styles: [`
        :host {
            font-size:12px;
        }
        ul {
            padding-left:0;
        }
        li {
            white-space:nowrap;
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
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let kadoReport of kadologReport">
                            <th>
                                {{kadoReport.kado.title}}
                            </th>
                            <td>
                                {{kadoReport.guests.length}}
                            </td>
                            <td>
                                <ul>
                                    <li *ngFor="let guest of kadoReport.guests">
                                        {{guest.name}}
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <span *ngFor="let guest of kadoReport.guests">
                                    {{guest.name}} &lsaquo;{{guest.email}}&rsaquo;;
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class KadologReportComponent {

    @Input() kadologReport: KadoReport[];
}
