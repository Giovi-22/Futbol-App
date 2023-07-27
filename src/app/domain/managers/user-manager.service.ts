import { Injectable } from '@angular/core';
import { UserRepositoryNgrxStoreService } from 'src/app/data/repositories/user/user-repository-ngrx-store.service';
import UserEntity from '../entities/UserEntity';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor(
    private userStorage: UserRepositoryNgrxStoreService
  ) { }

  userIsLogged(){
    return this.userStorage.isLogged();
  }

  setUser(user:UserEntity){
    this.userStorage.setUser(user);
  }

  setUserLoggedIn(isLogged:boolean){
    this.userStorage.setUserLoggedIn(isLogged);
  }

  getUser(){
    return this.userStorage.getUser();
  }
}
