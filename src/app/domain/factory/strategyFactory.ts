import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

import { TeamRepositoryNgrxStoreService } from "src/app/data/repositories/team-repository-ngrx-store.service";
import { FetchDataService } from "../../services/fetch-data.service";
import { CompetitionRepositoryNgrxStoreService } from "src/app/data/repositories/competition-repository-ngrx-store.service";
import { AppState } from '@store/app.state';


@Injectable({
    providedIn: 'root'
  })
class StrategyFactory{

    constructor(
        private http: HttpClient, 
        private store: Store<AppState>, 
        
        )
        {
        console.log("Constructor de la strategy factory")
        
        }

     create(strategy:string){
        switch(strategy){
            //case 'api': return new FetchDataService(this.http);
            case 'teamStorage': return new TeamRepositoryNgrxStoreService(this.store);
            case 'competitionStorage': return new CompetitionRepositoryNgrxStoreService(this.store);
            default: throw new Error("La estrategia seleccionada no existe");
        }

    }
}

export default StrategyFactory;