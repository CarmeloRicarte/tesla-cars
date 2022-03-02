export interface Car {
  name: string;
  types?: CarType[];
}

export interface CarType {
  package: string;
  price: number;
  colors: string[];
}
