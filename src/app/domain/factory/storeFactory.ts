import { Injectable } from '@angular/core';

import { FetchDataService } from "../../services/fetch-data.service";
import { TeamFootballDataApiStrategy } from '../strategies/team/TeamApiStrategy';
import { TeamApiStrategy, TeamStoreStrategy } from '../strategies/team/teamStrategies';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { TeamLocalDataStrategy } from '../strategies/team/TeamLocalDataStrategy';
import { TeamRepositoryNgrxStoreService } from 'src/app/data/repositories/team/team-repository-ngrx-store.service';
import { TeamRepository } from 'src/app/data/repositories/team/teamRepository';


@Injectable({
    providedIn: 'root'
  })
class StoreRepositoryFactory{

    storeRepository:Store<AppState>;

    constructor(
        private store: Store<AppState>, 
        
        )
        {
        this.storeRepository = this.store;    
        }
        
        create(strategy:string): TeamRepository {
            switch(strategy){
                case 'NgrxStore': return new TeamRepositoryNgrxStoreService(this.storeRepository);
                default: throw new Error("La Estrategia seleccionada no existe");
            }
    }
    
}

export default StoreRepositoryFactory;