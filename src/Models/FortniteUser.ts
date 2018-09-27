import { ForniteHeaders } from '../Interfaces/Headers';
import { HttpClient } from "../Interfaces/HttpCall";
import { Player } from "../Interfaces/Player";

export class FortniteUser {
  private API_ENDPOINT: string;
  private headers: ForniteHeaders;
  constructor(apiEndpoint: string, headers: ForniteHeaders) {
    this.API_ENDPOINT = apiEndpoint;
    this.headers = headers;
  }

  public async id() {
    await fetch({
      url: `${this.API_ENDPOINT}/users/id`,
      headers: {},
      body: {}
    })
  }

  public call() {
    return null;
  }
}
