export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Exam {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  preparation: string;
  indications: string[];
  category: string;
  icon: string;
}

export interface Promotion {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  description: string;
}

export interface FertilityPack {
  gender: 'femme' | 'homme';
  tests: string[];
  price: number;
  originalPrice: number;
}
