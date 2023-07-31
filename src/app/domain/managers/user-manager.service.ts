import { Injectable } from '@angular/core';
import { UserRepositoryNgrxStoreService } from 'src/app/data/repositories/user/user-repository-ngrx-store.service';
import UserEntity from '../entities/UserEntity';
import { TeamEntity } from '../entities/TeamEntity';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserApiStrategy } from '../strategies/user/userStrategies';
import { Observable, map } from 'rxjs';

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
    return this.#userServer.setFavoriteTeam(team).pipe(
      map((result)=>{
        console.log("La lista actualizada: ",result)
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
        console.log("removiendo el equipo")
        console.log("la lista devuelta es: ",result)
        this.userStorage.updateFavoriteList(result.data.favoriteTeams || []);
        return result;
      })
    );
  }
  
}
