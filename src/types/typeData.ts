type IAllProducts = [];

interface IProduct {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: IRating;
}

interface IRating {
  rate?: number;
}

export type { IAllProducts, IProduct };
