import { IStoreItem } from './IStoreItem';
export interface IStoreResponse {
    date_layout: string;
    lastupdate: number;
    date: string;
    rows: number;
    vbucks: string;
    items: IStoreItem[];
}