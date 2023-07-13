import { createReducer, on } from "@ngrx/store";
import { loadCompetitions, loadedCompetitions } from "../actions/competitions.actions";
import { TeamsState } from "src/app/models/storeModelsInterfaces";
import { loadTeam, loadTeams, loadedTeams } from "../actions/teams.actions";
import { TeamEntity } from "src/app/models/entities/TeamEntity";

export const initialState:TeamsState = {
    loading:false,
    teams:[],
    current: new TeamEntity({}),
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
    on(loadTeam,(state,{team})=>{
        return{
            ...state,
            loading:false,
            current:{...team}
        }
    })
)