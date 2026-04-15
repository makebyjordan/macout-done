export type ProductData = {
  name: string;
  description: string;
  image: string;
  price: number;
  buyLink: string;
};

export type Product = ProductData & {
  id: string;
};

export type TransactionType = 'income' | 'expense';

export type TransactionData = {
  type: TransactionType;
  title: string;
  description?: string;
  amount: number;
}

export type Transaction = TransactionData & {
  id: string;
  date: Date;
};

export type TestimonialData = {
  name: string;
  review: string;
  stars: number;
  avatar: string;
};

export type Testimonial = TestimonialData & {
  id: string;
};
