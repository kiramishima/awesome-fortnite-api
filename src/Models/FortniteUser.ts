import { Headers } from "../Interfaces/Headers";
import { HttpClient } from "../Interfaces/HttpCall";
import { Player } from "../Interfaces/Player";

export class FortniteUser {
  private api_endpoint;
  private headers: Headers;
  constructor(parent) {
    this.api_endpoint = parent.api_endpoint;
    this.headers = parent.headers;
  }

  id() {
    fetch({
      url: `${this.api_endpoint}/users/id`,
      headers: this.headers,
      
    })
  }

  call() {
    return null;
  }
}
