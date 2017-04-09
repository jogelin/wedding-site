import {Component} from "@angular/core";


@Component({
    selector: 'wg-kadolog-form',
    template: `
        <div class="row">
            <div class="col-sm-12 col-md-4 offset-md-4">
                <h3>Envie de participer ?</h3>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class KadologFormComponent {
}
