import { createAction, createActionGroup, props } from '@ngrx/store';
import { Competition } from 'src/app/models/interfaces/competitionInterfaces';
 
export const loadCompetitions = createAction(
    '[Competition List] Load competitions'
);

export const loadedCompetitions = createAction(
    '[Competition List] Uploaded successfully',
    props<{competitions: Competition[]}>()
);

 