let count = 0;
export default class Sach {
  id;
  tensach;
  tacgia;
  theloai;
  ngaytao;
  constructor(tensach, tacgia, theloai) {
    this.id = count;
    count++;
    this.tensach = tensach;
    this.tacgia = tacgia;
    this.theloai = theloai;
    this.ngaytao = new Date().toISOString();
  }
}
