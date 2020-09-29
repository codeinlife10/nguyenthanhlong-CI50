import Sach from './Sach.js'
import TuSach from './TuSach.js'


let tusach1 = new TuSach();
let sach1 = new Sach('Lamdi','NC','TT')
let sach2 = new Sach('DMPLK','TH','TT')
tusach1.themSach(sach1)
tusach1.themSach(sach2)
//tensach, tacgia, the loai
let dstt = 'theloai,tensach'
tusach1.suaSach(1,dstt)
tusach1.inDanhSach()