import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/data/ngrxStore/app.state';
import { TeamRepositoryNgrxStoreService } from 'src/app/data/repositories/team/team-repository-ngrx-store.service';
import { TeamStoreRepository } from 'src/app/models/interfaces/repositories/teamRepository.interface';


@Injectable({
    providedIn: 'root'
  })
class StoreRepositoryFactory{

    storeRepository:Store<AppState>;

    constructor(
        private store: Store<AppState>, 
        private http: HttpClient
        )
        {
        this.storeRepository = this.store;    
        }
        
        create(strategy:string): TeamStoreRepository {
            switch(strategy){
                case 'NgrxStore': return new TeamRepositoryNgrxStoreService(this.storeRepository);
                default: throw new Error("La Estrategia seleccionada no existe");
            }
    }
    
}

export default StoreRepositoryFactory;