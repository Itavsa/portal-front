import { Currency } from './currency';
import { Picture } from './picture';
import { ProductType } from './productType';
import { Tag } from './tag';
export interface Product {
  title: string;
  price: number;
  currency: Currency;
  type: ProductType;
  pictures: Picture[];
  tags: Tag[];
  description?: string;
  tailoredSpec?: Object;
}