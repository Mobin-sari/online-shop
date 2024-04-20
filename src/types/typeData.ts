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

interface IUsers {
  id?: number,
  name?: object,
  password?: string,
  phone?: number,
  username?: string,
}

export type { AllProducts, IProduct, Idata, IUsers };
