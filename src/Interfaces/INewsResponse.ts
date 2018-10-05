import { INewsItem } from './INewsItem';
export interface INewsResponse {
    type: string;
    typesm: string;
    entries: INewsItem[];
}