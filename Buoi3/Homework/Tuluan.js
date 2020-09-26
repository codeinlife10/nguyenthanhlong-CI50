import Cauhoi from "./Cauhoi.js";
export default class Tuluan extends Cauhoi {
  constructor(id, noidung, dapandung) {
    super("TL" + id, noidung, dapandung);
  }
  get getNoidung() {
    return this.noidung;
  }
}
