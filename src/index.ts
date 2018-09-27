import { FortniteUser } from "./Models/FortniteUser";

export class ForniteClient {
    private client_version: number = 3.1;
    private api_endpoint: string = 'https://fortnite-public-api.theapinetwork.com/prod09/';
    private api_version: string = 'v1.1';
    private apiKey: string = "";
    user: FortniteUser;
    constructor() {
        this.user = new FortniteUser();
    }

    setKey(key: string | any): void {
        this.apiKey = key;
    }
}