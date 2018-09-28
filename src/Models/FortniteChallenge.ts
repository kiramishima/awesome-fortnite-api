const fetch = require("node-fetch");
import { ForniteHeaders } from "../Interfaces/Headers";
import { IChallengeResponse } from "../Interfaces/IChallengeResponse";

export class FortniteChallenge {
    private API_ENDPOINT: string;
    private headers: ForniteHeaders;
    constructor(apiEndpoint: string, headers: ForniteHeaders) {
        this.API_ENDPOINT = apiEndpoint;
        this.headers = headers;
    }

    /**
     * Get challenges
     */
    public async getChallenges(season = "season4", language = "en"): Promise<IChallengeResponse> {
        const response: IChallengeResponse = await fetch(`${this.API_ENDPOINT}/challenges/get?season=${season}&language=${language}`, {
            // tslint:disable-next-line:ban-types
            headers: this.headers as Object,
        }).then((resp: Response) => resp.json());
        return response;
    }
}