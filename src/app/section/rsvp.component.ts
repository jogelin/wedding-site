import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'wg-section-rsvp',
    template: `
        <section id="rsvp">
            <div class="container">
                <div class="row">
                    <img src="../../assets/rsvp_title.svg" class="col-sm-12 col-md-6 offset-md-3" alt="Responsive image">
                </div>
                <hr>
                <div class="row">
                    <div class="col"> 
                        <form [formGroup]="form">
                            <div class="form-group">
                                <input formControlName="name" type="text" class="form-control" id="name" placeholder="Entrez votre nom + prénom">
                            </div>
                            <div class="form-group">
                                <input formControlName="email" type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez votre email">
                                <small id="emailHelp" class="form-text text-muted">Pour vous tenir au courant en cas de modifications</small>
                            </div>
                            <div class="form-group">
                                <textarea formControlName="message" class="form-control" id="name" aria-describedby="messageHelp" placeholder="Infos supplémentaires">
                                </textarea>
                                <small id="messageHelp" class="form-text text-muted">N'hésitez pas à préciser qui vous accompagnera ou pas...</small>
                                <small id="messageHelp" class="form-text text-muted">Et laisser nous un message chouette ;)</small>
                            </div>
                            <div class="form-group row">
                                <div class="offset-sm-4 col-sm-4">
                                    <button class="btn btn-lg btn-primary btn-block">Je viens !</button>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="offset-sm-4 col-sm-4">
                                    <button class="btn btn-sm btn-danger btn-block">Je ne viens pas...</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </section>
    `
})
export class SectionRSVPComponent implements OnInit{
    form: FormGroup;

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this._fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            confirmed: [true, Validators.required],
            message: ['', Validators.required],
            date: new Date()
        });
    }
}
