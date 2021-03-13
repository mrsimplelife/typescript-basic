type Heroes = "Hulk" | "Capt" | "Thor";
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};

interface UserProfile {
  id: number;
  username: string;
  email: string;
  profilePhotoUrl: string;
}
type Update = Partial<UserProfile> & { id: number };
const user: Update = { id: 1 };

// for in 반복문 코드
// var arr = ['a','b','c'];
// for (var key in arr) {
//   console.log(arr[key]);
// }
