import { User } from "src/app/models/interfaces/session.interfaces";

class UserEntity{

    firstName:string;
    lastName:string;
    password:string;
    email:string;

    constructor(user:User){
        this.firstName = user.firstName,
        this.lastName = user.lastName,
        this.email = user.email,
        this.password = user.password
    }
}

export default UserEntity;