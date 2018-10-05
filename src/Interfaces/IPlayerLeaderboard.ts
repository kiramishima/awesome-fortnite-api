import { IUserLeaderboard } from './IUserLeaderboard';
export interface IPlayerLeaderboard {
    rank: number;
    user: IUserLeaderboard;
    kills: number;
    wins: number;
    matches: number;
    score: number;
}
