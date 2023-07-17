import { TeamDto } from "../../models/interfaces/dtoInterfaces";

export class TeamEntity{
    
    area?;     
    id;    
    name;    
    shortName;
    tla;    
    logo;
    coach?;
    squad?;

    constructor(team:TeamDto){
        this.area=      team.area;
        this.id=       team.id;
        this.name=     team.name;
        this.shortName=team.shortName;
        this.tla=      team.tla;
        this.logo=team.logo;
        this.coach=team.coach;
        this.squad=team.squad;
    }
}
