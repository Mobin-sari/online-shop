interface Idata {
  isLoading: boolean;
  products: IProduct;
  error: string;
}

type AllProducts = [];

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

export type { AllProducts, IProduct, Idata };
