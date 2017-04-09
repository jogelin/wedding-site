import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {EMAIL_REGEX} from "../shared/util";

@Component({
    selector: 'wg-rsvp-form-load',
    template: `
        <form [formGroup]="form">
            <div class="form-group"
                 [class.has-success]="form.controls.email?.valid && form.controls.email?.touched"
                 [class.has-danger]="!form.controls.email?.valid && form.controls.email?.touched">
                <input formControlName="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"
                       [class.form-control-success]="form.controls.email?.valid && form.controls.email?.touched"
                       [class.form-control-danger]="!form.controls.email?.valid && form.controls.email?.touched">
            </div>
            <div class="form-group row">
                <div class="col-sm-4 col-md-5">
                    <button [disabled]="form.invalid" class="btn btn-primary btn-block" #load>
                        Charger mes infos
                    </button>
                </div>
                <div class="col-sm-8 col-md-7 mt-2 mt-sm-0 text-right">
                    <button type="button" class="btn btn-outline-secondary" (click)="showSaveForm.emit($event)">
                        Back
                    </button>
                </div>
            </div>
        </form>
    `
})
export class RsvpFormLoadComponent implements OnInit, AfterViewInit {

    @ViewChild('load') load;

    @Output() loadRsvp = new EventEmitter();
    @Output() showSaveForm = new EventEmitter();

    form: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.form = this._fb.group({
            email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]]
        });
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        Observable.fromEvent(this.load.nativeElement, 'click')
            .map((val) => this.form.value.email)
            .subscribe(email => {
                this.loadRsvp.emit(email)
            });
    }
}
