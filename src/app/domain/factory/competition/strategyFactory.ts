import { Injectable } from '@angular/core';

import { CompetitionApiStrategy } from '../../../models/interfaces/strategies/competitionStrategies.interface';
import { HttpClient } from '@angular/common/http';
import { CompetitionFootballDataRepository } from '../../../data/repositories/competition/CompetitionFootballDataRepository';
import { ErrorService } from 'src/app/services/error.service';


@Injectable({
    providedIn: 'root'
  })
class CompetitionApiStrategyFactory{

    #httpClient:HttpClient;

    constructor(
        private httpClient: HttpClient,
        private errorS: ErrorService
         
        
        )
        {
        this.#httpClient = this.httpClient;    
        }
        
        create(strategy:string): CompetitionApiStrategy {
                switch(strategy){
                    case 'CompetitionfootballApi': return new CompetitionFootballDataRepository(this.#httpClient);
                    default: throw new Error("Strategy not found");
                }        
    }
    
}

export default CompetitionApiStrategyFactory;