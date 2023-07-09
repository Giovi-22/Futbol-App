import { createAction, createActionGroup, props } from '@ngrx/store';
import { Competition } from 'src/app/models/interfaces/competitionInterfaces';
import { CompetitionCard } from 'src/app/models/storeModelsInterfaces';
 
export const loadCompetitions = createAction(
    '[Competition List] Load competitions'
);

export const currentCompetition = createAction(
    '[Competition current] selected competition',
    props<{current: string}>()
);

export const loadedCompetitions = createAction(
    '[Competition List] Uploaded successfully',
    props<{competitions: CompetitionCard[]}>()
);

 