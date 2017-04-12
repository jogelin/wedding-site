import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges, OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Guest} from "../guest/guest.model";
import {EMAIL_REGEX} from "../shared/util";
import {UnsubscribeOnDestroy} from '../shared/unsubscribe-on-destroy';

@Component({
    selector: 'wg-rsvp-form-save',
    template: `
        <form [formGroup]="form">
            <div class="form-group"
                 [class.has-success]="form.controls.name?.valid && form.controls.name?.touched"
                 [class.has-danger]="!form.controls.name?.valid && form.controls.name?.touched">
                <input formControlName="name" type="text" class="form-control" id="name" placeholder="Nom + prénom"
                       [class.form-control-success]="form.controls.name?.valid && form.controls.name?.touched"
                       [class.form-control-danger]="!form.controls.name?.valid && form.controls.name?.touched">
            </div>
            <div class="form-group"
                 [class.has-success]="form.controls.email?.valid && form.controls.email?.touched"
                 [class.has-danger]="!form.controls.email?.valid && form.controls.email?.touched">
                <input formControlName="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"
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
                <div class="col-sm-4 col-md-5">
                    <button type="button" [disabled]="form.invalid" class="btn btn-primary btn-block" #confirmed>
                        Je viens !
                    </button>
                </div>
                <div class="col-sm-2 col-md-3 mt-2 mt-sm-0">
                    <button type="button" [disabled]="form.invalid" class="btn btn-outline-danger btn-block" #cancelled>
                        Je ne viens pas...
                    </button>
                </div>
                <div class="col-sm-6 col-md-4 mt-2 mt-sm-0 text-right">
                    <button type="button" class="btn btn-outline-secondary" (click)="showLoadForm.emit($event)">
                        Récupérer mon RSVP
                    </button>
                </div>
            </div>
        </form>
    `
})
export class RsvpFormSaveComponent extends UnsubscribeOnDestroy implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('confirmed') confirmed;
    @ViewChild('cancelled') cancelled;

    @Input() guest: Guest;
    @Output() saveRsvp = new EventEmitter();
    @Output() showLoadForm = new EventEmitter();

    form: FormGroup;

    constructor(private _fb: FormBuilder) {
        super();
        this.form = this._fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
            confirmed: [true, Validators.required],
            message: ['', Validators.required]
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
            .takeUntil(this.componentDestroyed$)
            .do((val) => this.form.get('confirmed').setValue(val))
            .map((val) => this.form.value)
            .subscribe((guest) => {
                this.saveRsvp.emit(guest)
            });
    }
}
