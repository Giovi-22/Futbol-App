import { createReducer, on } from "@ngrx/store";
import { TeamsState } from "src/app/models/storeModels.Interfaces";
import { loadPlayers, loadPopular, loadTeam, loadTeams, loadedTeams } from "../actions/teams.actions";
import { TeamEntity } from "src/app/domain/entities/TeamEntity";

export const initialState:TeamsState = {
    loading:false,
    teams:[],
    current: new TeamEntity({}),
    popularTeams:[],
    players:[]
}

export const teamReducer = createReducer(
    initialState,
    on(loadTeams,(state)=>{return {...state,loading:true}}),
    on(loadedTeams,(state,{teams})=>{
        return {
            ...state,
            loading:false,
            teams
        };
    }),
    on(loadTeam,(state,{current})=>{
        return{
            ...state,
            loading:false,
            current
        }
    }),
    on(loadPopular,(state,{teams})=>{
        return {
            ...state,
            loading:false,
            popularTeams: teams
        }
    }),
    on(loadPlayers,(state,{players})=>{
        return {
            ...state,
            players
        }
    })
)