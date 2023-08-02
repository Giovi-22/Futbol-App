import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUser, setUserLoggedIn, updateFavoriteTeamList } from 'src/app/data/ngrxStore/actions/user.actions';
import { AppState } from 'src/app/data/ngrxStore/app.state';
import { favoriteTeamList, selectUser } from 'src/app/data/ngrxStore/selectors/user.selectors';
import UserEntity from 'src/app/domain/entities/UserEntity';
import { isLogged } from '../../ngrxStore/selectors/user.selectors';
import { UserRepository } from 'src/app/models/interfaces/repositories/userRepository.interface';
import { Observable } from 'rxjs';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryNgrxStoreService implements UserRepository {

  constructor(private store: Store<AppState>) { }

  setUser(user:UserEntity):void{
    this.store.dispatch(loadUser({user}))
  }

  setUserLoggedIn(isLogged:boolean):void{
    this.store.dispatch(setUserLoggedIn({isLogged}));
  }

  getUser():Observable<UserEntity>{
    return this.store.select(selectUser);
  }

  isLogged():Observable<boolean>{
    return this.store.select(isLogged);
  }

  updateFavoriteList(teamList:TeamEntity[]){
    this.store.dispatch(updateFavoriteTeamList({teamList}));
  }

  getFavoriteTeamList(){
    return this.store.select(favoriteTeamList);
  }

}

