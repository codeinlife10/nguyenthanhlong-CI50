import Cauhoi from "./Cauhoi.js";
export default class Tracnghiem extends Cauhoi {
  constructor(id, noidung, dapandung) {
    super("TN" + id, noidung, dapandung);
  }
get getNoidung() {
    return this.noidung;
  }
}
