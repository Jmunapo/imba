import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs";
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';


const TOKEN_KEY = "auth_token";

@Injectable()
export class AuthenticationProvider {

  role: string = "";
  authenticationState = new BehaviorSubject({state: false, role: null});

  //otsSelected = new BehaviorSubject("");

  constructor(private plt: Platform,
    private storage: Storage,
    ) {
    console.log('Hello AuthenticationProvider Provider');
    //this.plt.ready().then(()=> this.checkToken());
  }

  landlordRegister(){

  }

  landlordLogin(cred: any){
    return this.storage.set(TOKEN_KEY, cred).then(res => this.authenticationState.next({state: true, role: null}))
  }


  landlordLogout(){
    return this.storage.remove(TOKEN_KEY).then(()=> this.authenticationState.next({state: false, role: null}));
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }

  checkToken(role: string = null): Promise<void>{
    return this.storage.get(TOKEN_KEY).then(res => {
      //Do token valid,not expired, send backend...
      if(res){
        this.authenticationState.next({state: true, role});
      }
    })
  }


}
