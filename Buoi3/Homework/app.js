import Cauhoi from "./Cauhoi.js";
import Tuluan from "./Tuluan.js";
import Tracnghiem from "./Tracnghiem.js";
import Test from "./Test.js";


let tl1 = new Tuluan(1,"Hello",3) 
let tl2 = new Tuluan(2,"Hi",6)
let tn = new Tracnghiem(1,"B",3)
let test = new Test(1,"toan",20)
test.add(tn)
test.add(tl1)
test.add(tl2)
test.update(1)
test.show()