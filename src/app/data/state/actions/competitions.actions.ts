import { createAction, props } from '@ngrx/store';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';

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

 