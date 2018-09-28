import { ForniteHeaders } from '../Interfaces/Headers';
import { HttpClient } from "../Interfaces/HttpCall";
import { IPlayer } from "../Interfaces/IPlayer";
const fetch = require('node-fetch')

export class FortniteUser {
  private API_ENDPOINT: string;
  private headers: ForniteHeaders;
  constructor(apiEndpoint: string, headers: ForniteHeaders) {
    this.API_ENDPOINT = apiEndpoint;
    this.headers = headers;
  }
  /*
	 * Get user id out of an username.
	 */
  public async id(username: string): Promise<string> {
    let response: IPlayer = await fetch(`${this.API_ENDPOINT}/users/id?username=${username}`, <RequestInit>{
      headers: this.headers as Object,
    }).then((resp: Response) => resp.json());
    return response.uid;
  }

  /*
	 * Get user devices - returns an array.
	 */
  public async getUserPlatforms(username: string): Promise<string[]> {
    let response: IPlayer = await fetch(`${this.API_ENDPOINT}/users/id?username=${username}`, <RequestInit>{
      headers: this.headers as Object,
    }).then((resp: Response) => resp.json())
    return response.platforms;
  }

  public call() {
    return null;
  }
}

// TODO
/*
{ error: true,
     errorCode: 'errors.com.fortnite.common.unknown',
     errorMessage: 'invalid_api_key',
     numericErrorCode: '1001',
     originatingService: 'com.fortnite.account.public',
     intent: 'prod' } }
*/