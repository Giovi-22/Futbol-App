import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TeamFootballDataApiStrategy } from '../../strategies/team/TeamApiStrategy';
import { TeamApiStrategy } from '../../strategies/team/teamStrategies';



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
                default: throw new Error("La Estrategia seleccionada no existe");
            }
    }
    
}

export default ApiStrategyFactory;