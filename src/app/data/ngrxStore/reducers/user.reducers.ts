import { createReducer, on } from "@ngrx/store";

import { UserState } from "src/app/models/storeModels.Interfaces";
import UserEntity from "src/app/domain/entities/UserEntity";
import { loadUser, setUserLoggedIn, updateFavoriteTeamList } from "src/app/data/ngrxStore/actions/user.actions";


export const initialState:UserState = {
    isLogged:false,
    user: new UserEntity({
        email:"",
        firstName:"",
        lastName:"",
        password:"",
        favoriteTeams:[]
    })
}

export const userReducer = createReducer(
    initialState,
    
    on(loadUser,(state,{user})=>{
        return {
            ...state,
            user
        }}),
    on(setUserLoggedIn,(state,{isLogged})=>{
        return {
            ...state,
            isLogged
        }
    }),
    on(updateFavoriteTeamList,(state,{teamList})=>{
        return{
            ...state,
            user:{
            ...state.user,
            favoriteTeams:teamList
            }
        }
    })

)