import { ForniteItemRarity } from "../Enums/ForniteItemRarity";
import { ForniteItemType } from '../Enums/FortniteItemType';
import { ForniteItemObtainedType } from '../Enums/ForniteItemObtainedType';

export interface IStoreItemImage {
    image: string;
    images: IImagesItem,
    captial: ForniteItemType,
    type: ForniteItemType,
    rarity: ForniteItemRarity,
    obtained_type: ForniteItemObtainedType
}

export interface IImagesItem {
    transparent: string;
    background: string;
    featured?: IImagesItem
}