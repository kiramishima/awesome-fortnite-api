const fetch = require("node-fetch");
import { ForniteHeaders } from "../Interfaces/Headers";
import { HttpClient } from "../Interfaces/HttpCall";
import { IPlayer } from "../Interfaces/IPlayer";
import { IStat } from '../Interfaces/IStat';

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
    const response: IPlayer = await fetch(`${this.API_ENDPOINT}/users/id?username=${username}`, {
      // tslint:disable-next-line:ban-types
      headers: this.headers as Object,
    }).then((resp: Response) => resp.json());
    return response.uid;
  }

  /*
	 * Get user devices - returns an array.
	 */
  public async getUserPlatforms(username: string): Promise<string[]> {
    const response: IPlayer = await fetch(`${this.API_ENDPOINT}/users/id?username=${username}`, {
      // tslint:disable-next-line:ban-types
      headers: this.headers as Object,
    } as RequestInit).then((resp: Response) => resp.json());
    return response.platforms;
  }

  public async getUsernameFromId(ids: string[]): Promise<string[]> {
    const url = `${this.API_ENDPOINT}/users/username%20out%20of%20id?${ids.map((item) => `ids[]=${item}`)}`;
    const response: IPlayer = await fetch(url,
    {
      // tslint:disable-next-line:ban-types
      headers: this.headers as Object,
    } as RequestInit).then((resp: Response) => resp.json())
    return response.platforms;
  }
  /*
	 * Get the user stats.
	 */
  public async getUserStats(user:string, platform: string = 'pc', window = 'alltime'): Promise<IStat> {
    const url = `${this.API_ENDPOINT}/users/public/br_stats?user_id=${user}&platform=${platform}&window=${window}`;
    const response: IStat = await fetch(url, {
      headers: this.headers as Object,
    } as RequestInit).then((resp: Response) => resp.json()).then((res: any) => res.stats);
    return response;
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
