export interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  categories: string[];
  image: string;
  tag: string;
  weight: string;
  story: string;
  composition: string;
  nutrition: string;
  allergens: string;
}

export interface CartItem extends Product {
  qty: number;
}

export interface OrderFormData {
  name: string;
  phone: string;
  date: string;
  pickupMethod: string;
  wishes: string;
  pdnConsent: boolean;
}
