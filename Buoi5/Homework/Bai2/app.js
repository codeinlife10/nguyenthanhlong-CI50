import Place from "./js/Place.js";
import Person from "./js/Person.js";
import {F0, F1 } from "./js/Controller.js"
//Database
const listPlace = [
  {
    name: "BK",
    x: 2,
    y: 5,
  },
  {
    name: "BM",
    x: 1,
    y: 3,
  },
  {
    name: "BU",
    x: 2,
    y: 2,
  },
  {
    name: "HK",
    x: 6,
    y: 3,
  },
  {
    name: "BE",
    x: 7,
    y: 5,
  },
  {
    name: "MM",
    x: 11,
    y: 11,
  },
  {
    name: "NK",
    x: 9,
    y: 4,
  },
];
// let found = listPlace.find(element => element.name == "BK")

const listPerson = [
  {
    name: "L",
    phone: 1234,
    placeGone: ["BK", "BM"],
  },
  {
    name: "N",
    phone: 5222,
    placeGone: ["BU"],
  },
  {
    name: "T",
    phone: 2519,
    placeGone: ["HK", "BE", "MM"],
  },
  {
    name: "Q",
    phone: 9999,
    placeGone: ["NK", "BM"],
  },
];

let phoneNumber = Number(1234);
let person1 = F0(phoneNumber,listPerson)
let person2 = F1(person1,listPerson,listPlace)
console.log(person2);



/* ***Nâng cao 

Tìm F2 bằng cách coi F1 là F0 khi đó F2 đóng vai trò là F1 

Ta đã có danh sách F1 nên có thể dễ dàng làm điều này 😂🤣



*/
