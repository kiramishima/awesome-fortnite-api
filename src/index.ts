const fetch = require("node-fetch");
import { ForniteHeaders } from "./Interfaces/Headers";
import { FortniteUser } from "./Models/FortniteUser";
import { IStatus } from "./Interfaces/IStatus";
import { FortniteChallenge } from "./Models/FortniteChallenge";

export class ForniteClient {
    public user: FortniteUser;
    public challenges: FortniteChallenge;
    private CLIENT_VERSION: number = 3.1;
    private API_ENDPOINT: string = "https://fortnite-public-api.theapinetwork.com/prod09/";
    private API_VERSION: string = "v1.1";
    private apiKey: string = "";
    private headers: ForniteHeaders;
    constructor() {
        this.headers = {
            "Authorization": "",
            "X-Fortnite-API-Version": this.API_VERSION,
            "X-Fortnite-Client-Info": "Linux AWS",
            "X-Fortnite-Client-Version": this.CLIENT_VERSION,
        };
        this.user = new FortniteUser(this.API_ENDPOINT, this.headers);
        this.challenges = new FortniteChallenge(this.API_ENDPOINT, this.headers);
    }

    public setKey(key: string | any): void {
        this.apiKey = key;
        this.headers.Authorization = key;
    }

    public async checkStatus(): Promise<string> {
        const response: IStatus = await fetch(`${this.API_ENDPOINT}/status/fortnite_server_status`, {
            // tslint:disable-next-line:ban-types
            headers: this.headers as Object,
        }).then((resp: Response) => resp.json());
        return response.status;
    }
}
