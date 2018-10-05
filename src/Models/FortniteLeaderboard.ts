const fetch = require("node-fetch");
import { ForniteHeaders } from "../Interfaces/Headers";
import { ForniteLeaderboardType } from '../Enums/ForniteLeaderboardType';
import { ILeaderboard } from '../Interfaces/ILeaderboard';

export class FortniteLeaderboard {
    private API_ENDPOINT: string;
    private headers: ForniteHeaders;
    constructor(apiEndpoint: string, headers: ForniteHeaders) {
        this.API_ENDPOINT = apiEndpoint;
        this.headers = headers;
    }

    /**
     * Get Leaderboard
     */
    public async getLeaderboard(users_per_page = 10, offset = 0, window: ForniteLeaderboardType.KILLS): Promise<ILeaderboard> {
        const response: ILeaderboard = await fetch(`${this.API_ENDPOINT}/leaderboards/worldwide?users_per_page=${users_per_page}&offset=${offset}&window=${window}`, {
            // tslint:disable-next-line:ban-types
            headers: this.headers as Object,
        }).then((resp: Response) => resp.json());
        return response;
    }
}