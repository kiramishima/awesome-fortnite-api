import { ForniteHeaders } from "./Interfaces/Headers";
import { FortniteUser } from "./Models/FortniteUser";

export class ForniteClient {
    public user: FortniteUser;
    private CLIENT_VERSION: number = 3.1;
    private API_ENDPOINT: string = "https://fortnite-public-api.theapinetwork.com/prod09/";
    private API_VERSION: string = "v1.1";
    private apiKey: string = "";
    private headers: ForniteHeaders;
    constructor() {
        this.headers = {
            "Authorization": this.apiKey,
            "X-Fortnite-API-Version": this.API_VERSION,
            "X-Fortnite-Client-Info": "Linux AWS",
            "X-Fortnite-Client-Version": this.CLIENT_VERSION,
        };
        this.user = new FortniteUser(this.API_ENDPOINT, this.headers);
    }

    public setKey(key: string | any): void {
        this.apiKey = key;
    }
}
