import { Injectable } from '@angular/core';

import { FetchDataService } from "../../../services/fetch-data.service";
import { TeamFootballDataApiStrategy } from '../../strategies/team/TeamApiStrategy';
import { TeamApiStrategy } from '../../strategies/team/teamStrategies';


@Injectable({
    providedIn: 'root'
  })
class ApiStrategyFactory{

    #httpClient:FetchDataService;

    constructor(
        private httpClient: FetchDataService, 
        
        )
        {
        this.#httpClient = this.httpClient;    
        }
        
        create(strategy:string): TeamApiStrategy {
            switch(strategy){
                case 'TeamfootballApi': return new TeamFootballDataApiStrategy(this.#httpClient);
                default: throw new Error("La Estrategia seleccionada no existe");
            }
    }
    
}

export default ApiStrategyFactory;