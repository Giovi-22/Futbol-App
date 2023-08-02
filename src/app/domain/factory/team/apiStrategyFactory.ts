import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { TeamApiStrategy } from '../../../models/interfaces/strategies/teamStrategies';
import { TeamApiServerRepositoryService } from 'src/app/data/repositories/team/team-api-server-repository.service';
import { TeamFootballDataRepository } from 'src/app/data/repositories/team/TeamFootballDataRepository';



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
                case 'TeamfootballApi': return new TeamFootballDataRepository(this.httpClient);
                case 'TeamServer': return new TeamApiServerRepositoryService(this.httpClient);
                default: throw new Error("La Estrategia seleccionada no existe");
            }
    }
    
}

export default ApiStrategyFactory;