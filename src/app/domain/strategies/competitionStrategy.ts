import { Observable } from 'rxjs';
import { CompetitionEntity } from '../entities/CompetitionEntity';


export interface CompetitionSearchStrategy{
    getCompetition(competitionCode:string):Observable<CompetitionEntity>,
    getCompetitions():Observable<CompetitionEntity[]>
}