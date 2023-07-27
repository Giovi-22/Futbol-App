import { createAction, props } from '@ngrx/store';
import UserEntity from 'src/app/domain/entities/UserEntity';

export const loadUser = createAction(
    '[User ] Load user',
    props<{user:UserEntity}>()
);

