import {Component, Input} from '@angular/core';

@Component({
    selector: 'wg-section-part',
    template: `
        <section [id]="idi" class="section-padding">
            <div class="container">
                <div class="row" ngsReveal>
                    <img src="../../assets/{{idi}}_title.svg" class="col-sm-12 col-md-4 offset-md-1" alt="Responsive image">
                    <img src="../../assets/{{idi}}_line.svg" class="col-md-6 hidden-sm-down" alt="Responsive image">
                </div>
                <hr>
                <div class="row" ngsReveal>
                    <div class="col"> 
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class SectionPartComponent {
    @Input() idi: string;
}
