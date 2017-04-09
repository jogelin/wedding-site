import {Component, OnInit} from "@angular/core";
import * as guest from "./guest/guest.actions";
import * as kadolog from "./kadolog/kadolog.actions";
import {Store} from "@ngrx/store";
import * as fromRoot from "./app.reducer";
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";

@Component({
    selector: 'wg-root',
    styles:[`
    
    `],
    template: `        
        <div class="h-100" ngsRevealSet [ngsSelector]="'.row'"> 
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent implements OnInit {

    constructor(private _store: Store<fromRoot.State>, public _af: AngularFire) {

    }

    ngOnInit(): void {
        this._af.auth.login({
            provider: AuthProviders.Anonymous,
            method: AuthMethods.Anonymous
        });

        this._store.dispatch(new guest.LoadListAction());
        this._store.dispatch(new kadolog.LoadListAction());
    }
}
