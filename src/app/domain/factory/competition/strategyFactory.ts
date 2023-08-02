import { Injectable } from '@angular/core';

import { CompetitionApiStrategy } from '../../../models/interfaces/strategies/competitionStrategies.interface';
import { HttpClient } from '@angular/common/http';
import { CompetitionFootballDataRepository } from '../../../data/repositories/competition/CompetitionFootballDataRepository';


@Injectable({
    providedIn: 'root'
  })
class CompetitionApiStrategyFactory{

    #httpClient:HttpClient;

    constructor(
        private httpClient: HttpClient, 
        
        )
        {
        this.#httpClient = this.httpClient;    
        }
        
        create(strategy:string): CompetitionApiStrategy {
            switch(strategy){
                case 'CompetitionfootballApi': return new CompetitionFootballDataRepository(this.#httpClient);
                default: throw new Error("La Estrategia seleccionada no existe");
            }
    }
    
}

export default CompetitionApiStrategyFactory;