import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { UserRepositoryNgrxStoreService } from 'src/app/data/repositories/user/user-repository-ngrx-store.service';
import UserEntity from '../entities/UserEntity';
import { TeamEntity } from '../entities/TeamEntity';
import { UserApiStrategy } from '../../models/interfaces/strategies/userStrategies.interfaces';
import { UserServerRepository } from 'src/app/data/repositories/user/userServerRepository';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

    #userServer:UserApiStrategy;

  constructor(
    private userStorage: UserRepositoryNgrxStoreService,
    private http:HttpClient
  ) { 
    this.#userServer = new UserServerRepository(http);
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
    return this.#userServer.setFavoriteTeam(team).pipe(
      map((result)=>{
        this.userStorage.updateFavoriteList(result.data.favoriteTeams || []);
        return result
      })
    )
  }
  getFavoriteTeams():Observable<TeamEntity[] | undefined>{
    return this.userStorage.getFavoriteTeamList();
  }

  updatFavoriteTeams(teams:TeamEntity[]){
    this.userStorage.updateFavoriteList(teams);
  }

  removeFavoriteTeam(teamCode:number){
    return this.#userServer.removeFavoriteTeam(teamCode).pipe(
      map((result)=>{
        this.userStorage.updateFavoriteList(result.data.favoriteTeams || []);
        return result;
      })
    );
  }
  
}
