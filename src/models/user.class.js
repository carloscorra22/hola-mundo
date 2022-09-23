import { Roles } from "./roles.enum";

export class user{
    username = '';
    email = '';
    password = '';
    role = Roles.USER;


    constructor(username, email,password,role ){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}