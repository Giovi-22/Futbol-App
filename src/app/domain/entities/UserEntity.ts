import { User } from "src/app/models/interfaces/session.interfaces";
import { TeamEntity } from "./TeamEntity";

class UserEntity{

    firstName:string;
    lastName:string;
    password:string;
    email:string;
    favoriteTeams?:TeamEntity[];

    constructor(user:User){
        this.firstName = user.firstName,
        this.lastName = user.lastName,
        this.email = user.email,
        this.password = user.password
    }
}

export default UserEntity;