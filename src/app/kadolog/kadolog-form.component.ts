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
import {Observable} from "rxjs";
import {Guest} from "../guest/guest.model";

@Component({
    selector: 'wg-kadolog-form',
    template: `
        <form [formGroup]="form">
      


        </form>
    `
})
export class KadologFormComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('validate') validate;

    @Input() guest: Guest;
    @Output() saveKadolog = new EventEmitter();

    form: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.form = this._fb.group({
            name: ['', Validators.required],
            confirmed: [true, Validators.required],
            message: ['', Validators.required],
            creationDate: [new Date().toISOString()],
            updateDate: [new Date().toISOString()]
        });
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['Kadolog'] && changes['Kadolog'].currentValue && JSON.stringify(changes['Kadolog'].previousValue) !== JSON.stringify(changes['Kadolog'].currentValue)) {
            this.form.patchValue(changes['Kadolog'].currentValue);
        }
    }

    ngAfterViewInit() {
            Observable.fromEvent(this.validate.nativeElement, 'click')
            .map((val) => this.form.value)
            .subscribe((kadolog) => {
                this.saveKadolog.emit(kadolog)
            });
    }
}
