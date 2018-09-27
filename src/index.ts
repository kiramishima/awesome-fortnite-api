import { Headers } from "./Interfaces/Headers";
import { FortniteUser } from "./Models/FortniteUser";

export class ForniteClient {
    public user: FortniteUser;
    private client_version: number = 3.1;
    private api_endpoint: string = "https://fortnite-public-api.theapinetwork.com/prod09/";
    private api_version: string = "v1.1";
    private apiKey: string = "";
    private headers: Headers;
    constructor() {
        this.headers = {
            Authorization: this.apiKey,
            X-Fortnite-API-Version: this.api_version,
            X-Fortnite - Client - Info: string,
            X-Fortnite - Client - Version: number,
        };
        this.user = new FortniteUser(this.api_endpoint, this.headers);
    }

    public setKey(key: string | any): void {
        this.apiKey = key;
    }
}
