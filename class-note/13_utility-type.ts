interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function fetchProducts(): Promise<Product[]> {
  // 1. 상품 목록을 받아오기 위한 API 함수
  // ..
}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {
  // 2. 특정 상품의 상세 정보를 나타내기 위한 함수
}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: Partial<Product>) {
  // 3. 특정 상품 정보를 업데이트(갱신)하는 함수
}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }
// #1
// interface UserProfileUpdate {
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// }

// #2
// type UserProfileUpdate = {
//   [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
// };
// type UserProfileKeys = keyof UserProfile;

// #3
// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p];
// };

// #4
type MyPartial<T> = { [P in keyof T]?: T[P] };

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username: string;
//   email: string;
// }
// interface UserProfileUpdate {
//   username: UserProfile["username"];
//   email: UserProfile["email"];
// }
// type UserProfileUpdate = {
//   [p in "username" | "email"]: UserProfile[p];
// };
// type UserProfileUpdate<K extends keyof UserProfile> = {
//   [p in K]: UserProfile[p];
// };
type MyPick<T, K extends keyof T> = {
  [p in K]: T[p];
};
