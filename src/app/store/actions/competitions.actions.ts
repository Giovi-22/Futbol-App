import { createAction, props } from '@ngrx/store';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { Standing } from 'src/app/models/interfaces/competitioniterfaces';

export const loadCompetitions = createAction(
    '[Competition List] Load competitions'
);

export const saveCompetition = createAction(
    '[Competition Competition] save a competittion',
    props<{competition:CompetitionEntity}>()
)

export const currentCompetition = createAction(
    '[Competition current] selected competition',
    props<{current: string}>()
);

export const loadedCompetitions = createAction(
    '[Competition List] Uploaded successfully',
    props<{competitions: CompetitionEntity[]}>()
);

export const loadMatches = createAction(
    '[Competition Matches] save all matches',
    props<{matches:MatchEntity[]}>()
);

export const loadStandings =  createAction(
    '[Competition Standings] save standings',
    props<{standings:Standing[]}>()
)

 