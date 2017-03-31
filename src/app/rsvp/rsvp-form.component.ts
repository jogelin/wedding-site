import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GuestService} from "../guest/guest.service";
import {Observable} from "rxjs";
import {Guest} from "../guest/guest.model";

@Component({
    selector: 'wg-rsvp-form',
    template: `
        <form [formGroup]="form">
            <div class="form-group"
                 [class.has-success]="form.controls.name?.valid && form.controls.name?.touched"
                 [class.has-danger]="!form.controls.name?.valid && form.controls.name?.touched">
                <input formControlName="name" type="text" class="form-control" id="name" placeholder="Entrez votre nom + prénom"
                       [class.form-control-success]="form.controls.name?.valid && form.controls.name?.touched"
                       [class.form-control-danger]="!form.controls.name?.valid && form.controls.name?.touched">
            </div>
            <div class="form-group"
                 [class.has-success]="form.controls.email?.valid && form.controls.email?.touched"
                 [class.has-danger]="!form.controls.email?.valid && form.controls.email?.touched">
                <input formControlName="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez votre email"
                       [class.form-control-success]="form.controls.email?.valid && form.controls.email?.touched"
                       [class.form-control-danger]="!form.controls.email?.valid && form.controls.email?.touched">
            </div>
            <div class="form-group"
                 [class.has-success]="form.controls.message?.valid && form.controls.message?.touched"
                 [class.has-danger]="!form.controls.message?.valid && form.controls.message?.touched">
                <textarea rows="5" formControlName="message" class="form-control" id="name" aria-describedby="messageHelp" placeholder="Accompagné(e) de ...\n...et n'hésitez pas à nous laissez un chouette petit message"
                          [class.form-control-success]="form.controls.message?.valid && form.controls.message?.touched"
                          [class.form-control-danger]="!form.controls.message?.valid && form.controls.message?.touched">
                </textarea>
            </div>
            <div class="form-group row">
                <div class="offset-sm-4 col-sm-4">
                    <button [disabled]="form.invalid" class="btn btn-lg btn-primary btn-block" #confirmed>Je viens !
                    </button>
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-sm-4 col-sm-4">
                    <button [disabled]="form.invalid" class="btn btn-sm btn-danger btn-block" #cancelled>Je ne viens
                        pas...
                    </button>
                </div>
            </div>
        </form>
    `
})
export class RsvpFormComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('confirmed') confirmed;
    @ViewChild('cancelled') cancelled;

    @Input() guest: Guest;
    @Output() saveGuest = new EventEmitter();

    form: FormGroup;

    private _emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'i');

    constructor(private _fb: FormBuilder, private _rsvpService: GuestService) {
        this.form = this._fb.group({
            $key: [null],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(this._emailRegex)]],
            confirmed: [true, Validators.required],
            message: ['', Validators.required],
            creationDate: [new Date().toISOString()],
            updateDate: [new Date().toISOString()]
        });
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['guest'] && changes['guest'].currentValue && JSON.stringify(changes['guest'].previousValue) !== JSON.stringify(changes['guest'].currentValue)) {
            this.form.patchValue(changes['guest'].currentValue);
        }
    }

    ngAfterViewInit() {
        Observable.merge(
            Observable.fromEvent(this.confirmed.nativeElement, 'click').mapTo(true),
            Observable.fromEvent(this.cancelled.nativeElement, 'click').mapTo(false))
            .do((val) => this.form.get('confirmed').setValue(val))
            .map((val) => this.form.value)
            .subscribe((rsvp) => {
                this.saveGuest.emit(rsvp)
            });
    }
}
