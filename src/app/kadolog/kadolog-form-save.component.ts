import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild
} from "@angular/core";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Kado} from "./kadolog.model";

@Component({
    selector: 'wg-kadolog-form-save',
    template: `
        <form [formGroup]="form">
            <div class="form-group row">
                <div class="col-md-8">
                    <div class="card-columns">
                        <div class="card mb-3" *ngFor="let kado of kadolog">
                            <div class="card-block">
                                <i class="img-thumbnail mr-2 mb-2 fa" [ngClass]="'fa-'+kado.$key"></i>
                                <strong>{{kado.title}}</strong>
                                <p class="card-text">{{kado.description}}</p>
                                <button type="button" class="btn" [ngClass]="{'btn-primary': participate(kado), 'btn-outline-primary': !participate(kado)}" (click)="toggleParticipation(kado)">
                                    Je participe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-basket mb-3">
                        <div class="card-block">
                            <strong>Panier</strong>
                            <ul class="fa-ul">
                                <li *ngFor="let kado of kados.value">
                                    <i class="fa-li fa" [ngClass]="'fa-'+kado.$key"></i>
                                    {{kado.title}}
                                </li>
                            </ul>
                            <button [disabled]="form.invalid" class="btn btn-primary btn-block" #confirmed>
                                Je valide !
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        {{form.value | json}}
        {{currentGuestKado | json}}
    `
})
export class KadologFormSaveComponent implements OnChanges, AfterViewInit {

    @ViewChild('confirmed') confirmed;

    @Input() kadolog: Kado[];
    @Input() currentGuestKado: Kado[];
    @Output() saveKadolog = new EventEmitter();

    form: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.form = this._fb.group({
            kados: this._fb.array([])
        });
    }

    get kados(): FormArray {
        return this.form.get('kados') as FormArray;
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['currentGuestKado'] && changes['currentGuestKado'].currentValue && JSON.stringify(changes['currentGuestKado'].previousValue) !== JSON.stringify(changes['currentGuestKado'].currentValue)) {
            this.kados.setValue(changes['currentGuestKado'].currentValue);
        }
    }

    ngAfterViewInit() {
        Observable.fromEvent(this.confirmed.nativeElement, 'click')
            .map((val) => this.form.get('kados').value)
            .subscribe(kados => this.saveKadolog.emit(kados.map(kado => kado.$key)));
    }

    toggleParticipation(kado: Kado) {
        if (this.participate(kado)) {
            this.kados.removeAt(this.kados.controls.findIndex(control => control.value.$key === kado.$key));
        } else {
            this.kados.push(this._fb.control(kado));
        }
    }

    participate(kado: Kado): boolean {
        return this.kados.controls.some(control => control.value.$key === kado.$key);
    }

}
