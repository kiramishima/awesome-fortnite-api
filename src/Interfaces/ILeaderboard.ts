import { IPlayerLeaderboard } from './IPlayerLeaderboard';
export interface ILeaderboard {
    window: string;
    users: number;
    totalusers: number;
    entries: IPlayerLeaderboard[];
}