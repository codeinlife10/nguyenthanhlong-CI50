import Tuluan from "./Tuluan.js";
import Tracnghiem from "./Tracnghiem.js";
export default class Test {
  id;
  tenbaitest;
  thoiluong;
  ngaytao = new Date().toISOString();
  questList = new Array();
  constructor(id, tenbaitest, thoiluong) {
    this.id = id;
    this.tenbaitest = tenbaitest;
    this.thoiluong = thoiluong;
  }
  add(Cauhoi) {
    this.questList.push(Cauhoi);
  }
  del(id){
      this.questList.splice(id-1,1)
  }
  update(id){
      let noidungmoi = prompt('Nhap noi dung moi')
      let dapanmoi = prompt('Nhap dap an moi')
      this.questList[id-1].noidung = noidungmoi
      this.questList[id-1].dapan = dapanmoi
  }
  show() {
    console.log(` 
    Bai kiem tra ${this.tenbaitest} ngày ${this.ngaytao}
    Thoi luong cua bai kiem tra la : ${this.thoiluong}
    `);
    for (let i = 0; i < this.questList.length; i++) {
      console.log(`
        Cau hoi  ${i + 1} la:
           ${this.questList[i].getNoidung}
        `);
    }
    //   !!!!!
    // this.questList.forEach((index)=>{
    //     console.log(this);
    //     console.log(`
    //     Cau hoi  ${index + 1} la:
    //     ${this.questList[index].getNoidung}
    //  `);
    // })
  }
}
