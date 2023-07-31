import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TeamFootballDataApiStrategy } from '../../strategies/team/TeamApiStrategy';
import { TeamApiStrategy } from '../../strategies/team/teamStrategies';
import { TeamApiServerRepositoryService } from 'src/app/data/repositories/team/team-api-server-repository.service';



@Injectable({
    providedIn: 'root'
  })
class ApiStrategyFactory{

    constructor(
        private httpClient: HttpClient, 
        
        )
        {
        }
        
        create(strategy:string): TeamApiStrategy {
            switch(strategy){
                case 'TeamfootballApi': return new TeamFootballDataApiStrategy(this.httpClient);
                case 'TeamServer': return new TeamApiServerRepositoryService(this.httpClient);
                default: throw new Error("La Estrategia seleccionada no existe");
            }
    }
    
}

export default ApiStrategyFactory;