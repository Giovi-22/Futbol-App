import { Injectable } from '@angular/core';

import { CompetitionApiStrategy } from '../../strategies/competition/competitionStrategy.interface';
import { CompetitionFootballDataApiStrategy } from '../../strategies/competition/CompetitionApiStrategy';
import { HttpClient } from '@angular/common/http';


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
                case 'CompetitionfootballApi': return new CompetitionFootballDataApiStrategy(this.#httpClient);
                default: throw new Error("La Estrategia seleccionada no existe");
            }
    }
    
}

export default CompetitionApiStrategyFactory;