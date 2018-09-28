import { IChallenge } from "./IChallenge";

export interface IWeek {
    week: number;
    value: string;
    entries: IChallenge[];
}