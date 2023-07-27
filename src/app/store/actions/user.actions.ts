import { createAction, props } from '@ngrx/store';
import UserEntity from 'src/app/domain/entities/UserEntity';
import { isLogged } from '../selectors/user.selectors';

export const loadUser = createAction(
    '[User ] Load user',
    props<{user:UserEntity}>()
);

export const setUserLoggedIn = createAction(
    '[User Logged] Set user logged in',
    props<{isLogged:boolean}>()
)

