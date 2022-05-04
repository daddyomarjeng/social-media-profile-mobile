import ImageOne from "./assets/pro.jpg";
import ImageTwo from "./assets/pro1.jpg";
import ImageThree from "./assets/pro2.jpg";

export const USERS = [
  {
    id: 1,
    name: "Haddy Sarr",
    address: "Bakau",
    avatar: ImageOne,
    following: true,
    follower: true,
  },
  {
    id: 2,
    name: "Musa Ndow",
    address: "Banjul",
    avatar: ImageThree,
    following: true,
    follower: false,
  },
  {
    id: 3,
    name: "Aja Gaye",
    address: "Latrikunda",
    avatar: ImageTwo,
    following: false,
    follower: true,
  },
  {
    id: 4,
    name: "Fatoumatta Khan",
    address: "Yundum",
    avatar: ImageOne,
    following: false,
    follower: true,
  },
  {
    id: 5,
    name: "Alieu Khan",
    address: "Lamen",
    avatar: ImageThree,
    following: false,
    follower: true,
  },
];

export const POSTS = [
  {
    id: 2,
    image: ImageTwo,
  },
  {
    id: 1,
    image: ImageOne,
  },

  {
    id: 4,
    image: ImageThree,
  },
  {
    id: 3,
    image: ImageOne,
  },
  {
    id: 5,
    image: ImageTwo,
  },
  {
    id: 6,
    image: ImageThree,
  },
  {
    id: 7,
    image: ImageTwo,
  },
];
