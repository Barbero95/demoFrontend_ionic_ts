export class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    update_at: string;
    created_at: string;

    constructor(){
        this.id = 0;
        this.name = "";
        this.surname = "";
        this.email = "";
        this.password = "";
        this.update_at = "";
        this.created_at = "";
    }
}