class Person {
  constructor(name, age, sex, address) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.address = address;
  }
  speak() {
    console.log("Hello");
  }
  introduce() {
    console.log(`
        My name is ${this.name}
        Im ${this.age} and im a ${this.sex}
        i live in ${this.address}
        `);
  }
}

class Crush extends Person {
  appearance;
  favorites;
  constructor(name, age, address, appearance, favorites) {
    super(name, age, "Girl", address);
    this.appearance = appearance;
    this.favorites = favorites;
  }

  speak() {
    console.log("We are just friends");
  }

  introduce() {
    console.log(`
             Im ${this.appearance} and my favorite is ${this.favorites} 
         `);
  }
}

class OldGirlFriend extends Person {
  favorites;
  constructor(name, age, address, favorites) {
    super(name, age, "Girl", address);
    this.favorites = favorites;
  }

  speak() {
    console.log("We are just friends");
  }

  introduce() {
    console.log(`
          my favorite is ${this.favorites} 
        `);
  }
}

class List {
  owner;
  person = [];
  constructor(owner, person) {
    this.owner = owner;
    this.person = person;
  }

  add(Love) {
    this.person.push(Love);
  }

  showAll() {
    console.log(`
      This is list's ${this.owner}
      `);
    this.person.forEach((value, i) => {
      console.log(value);
    });
  }
}

class Controller {
  addCrush(){
    alert("Ban da chon them crush");
    CrushData = prompt("Nhap thong tin crush : name/age/address/appear/favor");
    CrushData = CrushData.split(",");
    CrushData = CrushData.filter(function(value){
      return value!=undefined
    })
    list.add(
      new Crush(
        CrushData[0],
        CrushData[1],
        CrushData[2],
        CrushData[3],
        CrushData[4]
      )
    );
    alert("Not Found But Success🤦‍♂️🤦‍♂️");
   }

   addNYC(){
     alert("Ban da chon them NYC");
      NYCData = prompt("Nhap thong tin NYC : name,age,address,favor");
      NYCData = NYCData.split(",");
      NYCData = NYCData.filter(function(value){
        return value!=undefined
      })
      list.add(
        new OldGirlFriend(
            NYCData[0], 
            NYCData[1], 
            NYCData[2], 
            NYCData[3]
        )
      );
      alert("Lay dau ra NYC🤣😂");
   }

   show(){
    alert("Ban da chon in ra danh sach");
    list.showAll();
   }
}

let personList = [];
let list = new List("Long", personList);
let controller = new Controller()
let CrushData;
let NYCData;
let check = true;
while (check === true) {
  switch (Number(prompt("Nhap lua chon cua ban"))) {
    case 1:
      controller.addCrush()
      break;
    case 2:
      controller.addNYC()
      break;
    case 3:
      controller.show()
      break;
    default:
      check = false;
      break;
  }
}