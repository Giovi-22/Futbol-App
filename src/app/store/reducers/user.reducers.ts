import { createReducer, on } from "@ngrx/store";
import { loadCompetitions, loadedCompetitions } from "../actions/competitions.actions";
import { TeamsState, UserState } from "src/app/models/storeModelsInterfaces";
import { loadPopular, loadTeam, loadTeams, loadedTeams } from "../actions/teams.actions";
import { TeamEntity } from "src/app/domain/entities/TeamEntity";
import UserEntity from "src/app/domain/entities/UserEntity";
import { loadUser } from "@store/actions/user.actions";

export const initialState:UserState = {
    isLogged:false,
    favoritePlayers:[],
    favoriteTeams:[],
    user: new UserEntity({
        email:"",
        firstName:"",
        lastName:"",
        password:""
    })
}

export const userReducer = createReducer(
    initialState,
    on(loadUser,(state,{user})=>{
        return {
            ...state,
            isLogged:true,
            user
        }}),
)