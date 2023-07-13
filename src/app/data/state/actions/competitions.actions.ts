import { createAction, props } from '@ngrx/store';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';

export const loadCompetitions = createAction(
    '[Competition List] Load competitions'
);

export const currentCompetition = createAction(
    '[Competition current] selected competition',
    props<{current: string}>()
);

export const loadedCompetitions = createAction(
    '[Competition List] Uploaded successfully',
    props<{competitions: CompetitionEntity[]}>()
);

 