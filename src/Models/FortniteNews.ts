const fetch = require("node-fetch");
import { ForniteHeaders } from "../Interfaces/Headers";
import { INewsResponse } from '../Interfaces/INewsResponse';

export class FortniteNews {
    private API_ENDPOINT: string;
    private headers: ForniteHeaders;
    constructor(apiEndpoint: string, headers: ForniteHeaders) {
        this.API_ENDPOINT = apiEndpoint;
        this.headers = headers;
    }

    /**
     * Get challenges
     */
    public async getNews(): Promise<INewsResponse> {
        const response: INewsResponse = await fetch(`${this.API_ENDPOINT}/br_motd/get`, {
            // tslint:disable-next-line:ban-types
            headers: this.headers as Object,
        }).then((resp: Response) => resp.json());
        return response;
    }
}