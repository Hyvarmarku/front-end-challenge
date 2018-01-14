
export interface Quality {
  name: string;
  rating: number;
}

export class Car {
  id: number;
  img: string;
  manufacturer: string;
  price: number;
  quality: Quality[];
}
