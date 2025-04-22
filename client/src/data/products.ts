export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  imageUrl: string;
}

// Using a fixed local path for all product images
const imagePath = "/test-image-1.jpg";

export const products: Product[] = [
  {
    "id": 1,
    "name": "floral print v-neck top",
    "brand": "shaye",
    "price": 2986,
    "originalPrice": 4977,
    "discountPercentage": 40,
    "imageUrl": imagePath
  },
  {
    "id": 2,
    "name": "morgan blouse",
    "brand": "kazo",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": imagePath
  },
  {
    "id": 3,
    "name": "white typographic printed regular tshirt",
    "brand": "newme",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": imagePath
  },
  {
    "id": 4,
    "name": "women's grey cotton regular fit blouse",
    "brand": "cotton world",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": imagePath
  },
  {
    "id": 5,
    "name": "notch neck floral top",
    "brand": "us polo",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": imagePath
  },
  {
    "id": 6,
    "name": "spread collar chambray denim shirt",
    "brand": "us polo",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": imagePath
  },
  {
    "id": 7,
    "name": "cloudy grey women's denim jacket",
    "brand": "freakins",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": imagePath
  },
  {
    "id": 8,
    "name": "fiorella top ♡",
    "brand": "girls dont dress for boys",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": imagePath
  },
  {
    "id": 9,
    "name": "lapel collar drop shoulder cropped denim shirt",
    "brand": "chemistry india",
    "price": 4500,
    "originalPrice": 6000,
    "discountPercentage": 25,
    "imageUrl": imagePath
  },
  {
    "id": 10,
    "name": "black floral crop top",
    "brand": "Casuals Inc.",
    "price": 3200,
    "originalPrice": 3200,
    "discountPercentage": 0,
    "imageUrl": imagePath
  }
];
