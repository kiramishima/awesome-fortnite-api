import { HttpClient } from "../Interfaces/HttpCall";
import { Player } from "../Interfaces/Player";
import request from "request";

export class FortniteUser {
    private api_endpoint;
    constructor(parent) {
        this.api_endpoint  = parent.api_endpoint;
    }

    id() {
        request
    }

    call () {
        return null;
    }
}