const fetch = require("node-fetch");
import { ForniteHeaders } from "../Interfaces/Headers";
import { IStoreResponse } from '../Interfaces/IStoreResponse';

export class FortniteItems {
    private API_ENDPOINT: string;
    private headers: ForniteHeaders;
    constructor(apiEndpoint: string, headers: ForniteHeaders) {
        this.API_ENDPOINT = apiEndpoint;
        this.headers = headers;
    }

    /**
     * Get challenges
     */
    public async getStore(): Promise<IStoreResponse> {
        const response: IStoreResponse = await fetch(`${this.API_ENDPOINT}/store/get`, {
            // tslint:disable-next-line:ban-types
            headers: this.headers as Object,
        }).then((resp: Response) => resp.json());
        return response;
    }
}