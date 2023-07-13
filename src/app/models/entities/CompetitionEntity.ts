import { CompetitionDto } from "../interfaces/dtoInterfaces";

export class CompetitionEntity{
    
        id;                     
        area?;                  
        name;                    
        code;                                     
        logo;                                  
        currentSeason?;           
      

    constructor(competition:CompetitionDto){
        this.id= competition.id;
        this.area= competition.area;
        this.name= competition.name;
        this.code= competition.code;
        this.logo= competition.logo;
        this.currentSeason= competition.currentSeason;
    }
}
