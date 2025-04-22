export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    "id": 1,
    "name": "floral print v-neck top",
    "brand": "shaye",
    "price": 2986,
    "originalPrice": 4977,
    "discountPercentage": 40,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 2,
    "name": "morgan blouse",
    "brand": "kazo",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 3,
    "name": "white typographic printed regular tshirt",
    "brand": "newme",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 4,
    "name": "women's grey cotton regular fit blouse",
    "brand": "cotton world",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 5,
    "name": "notch neck floral top",
    "brand": "us polo",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 6,
    "name": "spread collar chambray denim shirt",
    "brand": "us polo",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 7,
    "name": "cloudy grey women's denim jacket",
    "brand": "freakins",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 8,
    "name": "fiorella top ♡",
    "brand": "girls dont dress for boys",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 9,
    "name": "lapel collar drop shoulder cropped denim shirt",
    "brand": "chemistry india",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": "/test-image-1.jpg"
  },
  {
    "id": 10,
    "name": "black floral crop top",
    "brand": "Casuals Inc.",
    "price": 3200,
    "originalPrice": 3200,
    "discountPercentage": 0,
    "imageUrl": "/test-image-1.jpg"
  }
];
