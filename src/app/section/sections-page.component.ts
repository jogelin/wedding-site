import {Component} from '@angular/core';

@Component({
    selector: 'wg-sections-page',
    styleUrls: ['sections-page.component.scss'],
    template: `
        <nav class="navbar"></nav>


        
        <wg-section idi="aline-et-jonathan" bg="bg-yellow">
            <div class="container d-flex h-100">
                <div class="row justify-content-center align-self-center w-100">
                    <div class="col-5">
                        <img src="../../assets/aline_et_jonathan.svg" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
            </div>
        </wg-section>
        <!--<wg-section idi="vous-invit" bg="bg-yellow">-->
            <!--<div class="row">-->
                <!--<div class="col">-->
                    <!--<img src="../../assets/vous_invit.svg" class="img-fluid" alt="Responsive image">-->
                <!--</div>-->
            <!--</div>-->
        <!--</wg-section> -->
    `
})
export class SectionsPageComponent {
}
