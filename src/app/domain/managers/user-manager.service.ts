import { Injectable } from '@angular/core';
import { UserRepositoryNgrxStoreService } from 'src/app/data/repositories/user/user-repository-ngrx-store.service';
import UserEntity from '../entities/UserEntity';
import { TeamEntity } from '../entities/TeamEntity';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserApiStrategy } from '../strategies/user/userStrategies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {
    #userServer:UserApiStrategy;
  constructor(
    private userStorage: UserRepositoryNgrxStoreService,
    private http:HttpClient
  ) { 
    this.#userServer = new UserApiStrategy(http);
  }

  setUser(user:UserEntity){
    this.userStorage.setUser(user);
  }

  setUserLoggedIn(isLogged:boolean){
    this.userStorage.setUserLoggedIn(isLogged);
  }

  userIsLogged(){
    return this.userStorage.isLogged();
  }

  getUser(){
    return this.userStorage.getUser();
  }
//---------FAVORITES-------------------

  setFavoriteTeam(team:TeamEntity){
    this.#userServer.setFavoriteTeam(team).subscribe({
      next:(result)=>{

      },
      error:(error:HttpErrorResponse)=>{

      }
    })
  }
  getFavoriteTeams():Observable<TeamEntity[] | HttpErrorResponse>{
    return this.#userServer.getFavoriteTeams();
  }

  removeFavoriteTeam(teamCode:number){
    this.#userServer.removeFavoriteTeam(teamCode);
  }
  
}
