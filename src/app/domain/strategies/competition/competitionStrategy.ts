import { Observable } from 'rxjs';
import { CompetitionEntity } from '../../entities/CompetitionEntity';
import { Standing } from 'src/app/models/interfaces/competitioniterfaces';


export interface CompetitionApiStrategy{
    getCompetition(competitionCode:string):Observable<CompetitionEntity>,
    getCompetitions():Observable<CompetitionEntity[]>
    getStandings(competitionCode:string):Observable<Standing[]>
}