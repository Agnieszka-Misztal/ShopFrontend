import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username==='user' && password==='haslo'){
      sessionStorage.setItem('authenticatedUser', username);
    return true;
  }
    return false;

}
  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }
}