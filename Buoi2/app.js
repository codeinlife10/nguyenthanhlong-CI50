class Car {
  constructor(brand, owner, price, buy_at) {
    this.brand = brand;
    this.owner = owner;
    this.price = price;
    this.buy_at = buy_at;
  }
  static troll() {
    console.log("Tiền Tiền");
  }
  introduce() {
    console.log(`
           Hello , my name is ${this.brand}
           my owner is ${this.owner}
        `);
  }
}
let car = new Car("Long", 20, "Nam", "...");
car.name = "Nam";
car.age = "21";
console.log(car);
car.introduce();

console.log(new Date().toISOString());

class Mer extends Car {
  func;
  constructor(func, owner, price, buy_at) {
    super();
    this.func = func;
  }
  static troll() {
    console.log(`
           this car is ${this.func}
        `);
  }
}


class Crush {
    firstName;lastName;age;address
    constructor(firstName,lastName,age,address){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.address = address
    }
    get fullName(){
        return this.lastName
    }
}
// ctrl + P => dungf extension getter and setter  


//BTVN : 
/*
1.Tìm hiểu về setter 
2.
Viết chuiwng tình liệt kê danh sách crush,nyc

Person : 
+ name , age , sex , address
+speak() , introduce()
Crush -> Person ,apperance , favorites
OldGirlfriend -> person : favorites
List : 
+ owner 
+ person[]
+ showAll()
 */