import { IStoreItemImage } from './IStoreItemImage';
export interface IStoreItem {
    itemid: string;
    name: string;
    cost: number;
    featured : number;
    refundable: number;
    lastupdate: number;
    item : IStoreItemImage
}