import {
    AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
    ViewChild
} from "@angular/core";
import {Kado} from "./kadolog.model";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {GuestKado} from "../guest/guest.model";

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
                <form [formGroup]="form">
                    <div class="card-columns">
                        {{kadolog | json}}
                        <div class="card" *ngFor="let kado of kadolog">
                            <div class="card-block">
                                <img src="./assets/{{kado.$key}}.png" alt="Card image cap" class="img-thumbnail">
                                <h4 class="card-title">{{kado.title}}</h4>
                                <p class="card-text">{{kado.description}}</p>
                                <a href="#" class="btn btn-primary">Je participe</a>
                                <button type="button" class="btn" [class.btn-outline-primary]="kado.participate">
                                    Je participe
                                </button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn" #validate>Validate
                    </button>
                </form>
            </div>
        </div>
    `
})
export class KadologFormComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('validate') validate;

    @Input() kadolog: GuestKado[];
    @Output() saveKadolog = new EventEmitter();

    form: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.form = this._fb.group({
            kadoKeys: this._fb.array([])
        });
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['kadolog'] && changes['kadolog'].currentValue && JSON.stringify(changes['kadolog'].previousValue) !== JSON.stringify(changes['kadolog'].currentValue)) {
            this.form.patchValue(changes['kadolog'].currentValue);
        }
    }

    ngAfterViewInit() {
        Observable.fromEvent(this.validate.nativeElement, 'click')
            .map((val) => this.form.value)
            .subscribe(kadoKeys => {
                this.saveKadolog.emit(kadoKeys)
            });
    }
}
