import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public afAuth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  
  async login(email : string, password: string){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(email,password);
    } catch(err){
      console.dir(err);
    }
  }
}
