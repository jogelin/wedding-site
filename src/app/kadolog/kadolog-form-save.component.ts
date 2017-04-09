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
                                <img class="img-thumbnail mr-2 mb-2" src="./assets/{{kado.$key}}.png">
                                <strong>{{kado.title}}</strong>
                                <p class="card-text">{{kado.description}}</p>
                                <button type="button" class="btn" [ngClass]="{'btn-primary': participate(kado.$key), 'btn-outline-primary': !participate(kado.$key)}" (click)="toggleParticipation(kado.$key)">
                                    Je participe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    lmkh
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-4 col-md-5">
                    <button [disabled]="form.invalid" class="btn btn-primary btn-block" #confirmed>
                        Je valide !
                    </button>
                </div>
            </div>
        </form>
    `
})
export class KadologFormSaveComponent implements OnChanges, AfterViewInit {

    @ViewChild('confirmed') confirmed;

    @Input() kadolog: Kado[];
    @Input() currentGuestKadoKeys: string[];
    @Output() saveKadolog = new EventEmitter();

    form: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.form = this._fb.group({
            kadoKeys: this._fb.array([])
        });
    }

    get kadoKeys(): FormArray {
        return this.form.get('kadoKeys') as FormArray;
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['currentGuestKadoKeys'] && changes['currentGuestKadoKeys'].currentValue && JSON.stringify(changes['currentGuestKadoKeys'].previousValue) !== JSON.stringify(changes['currentGuestKadoKeys'].currentValue)) {
            this.kadoKeys.setValue(changes['currentGuestKadoKeys'].currentValue);
        }
    }

    ngAfterViewInit() {
        Observable.fromEvent(this.confirmed.nativeElement, 'click')
            .map((val) => this.form.value)
            .subscribe(kadoKeys => this.saveKadolog.emit(kadoKeys.value));
    }

    toggleParticipation($key: string) {
        if (this.participate($key)) {
             this.kadoKeys.removeAt(this.kadoKeys.value.indexOf($key));
        } else {
            this.kadoKeys.push(this._fb.control($key));
        }
    }

    participate($key: string):boolean {
        return this.kadoKeys.value.includes($key);
    }

}
