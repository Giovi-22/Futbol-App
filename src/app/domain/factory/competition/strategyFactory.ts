import { Injectable } from '@angular/core';


import { FetchDataService } from 'src/app/services/fetch-data.service';
import { CompetitionApiStrategy } from '../../strategies/competition/competitionStrategy.interface';
import { CompetitionFootballDataApiStrategy } from '../../strategies/competition/CompetitionApiStrategy';


@Injectable({
    providedIn: 'root'
  })
class CompetitionApiStrategyFactory{

    #httpClient:FetchDataService;

    constructor(
        private httpClient: FetchDataService, 
        
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