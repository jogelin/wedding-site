import {Component, Input} from "@angular/core";

@Component({
    selector: 'wg-kadolog-not-available',
    template: `
        <div class="row">
            <div class="col">
                <h3>Envie de participer ?</h3>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <p>
                    Pour des raisons technico-pratiques, merci de d'abord rsvp.
                </p>
            </div>
        </div>
    `
})
export class KadologNotAvailableComponent {

}
