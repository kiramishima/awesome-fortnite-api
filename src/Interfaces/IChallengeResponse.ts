import { IWeek } from "./IWeek";

export interface IChallengeResponse {
    language: string;
    season: number;
    currentweek: number;
    star: string;
    challenges: IWeek[];
}