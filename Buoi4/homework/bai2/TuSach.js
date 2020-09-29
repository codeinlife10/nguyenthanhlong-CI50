import Sach from './Sach.js'
let count = 0
export default class TuSach {
    id;
    soluonglonnhat;
    danhsach
    constructor(){
        this.id = count
        count++
        this.soluonglonnhat = 10
        this.danhsach = new Array()
    }

    themSach(Sach){
        if(Sach !== null && this.danhsach.length < this.soluonglonnhat){
            this.danhsach.push(Sach)
        }
    }
    xoaSach(id){
        this.danhsach.splice(id-1,1)
    }
   //danhsachthuoctinh = prompt('thuoctinh1,thuoctinh2,thuoctinh3')
    suaSach(id,danhsachthuoctinh){
        danhsachthuoctinh = danhsachthuoctinh.split(',')
        let thuoctinh1 = danhsachthuoctinh.indexOf('tensach')
        if(thuoctinh1 != -1){
            let thuoctinh1m = prompt(`Nhap vao ${danhsachthuoctinh[thuoctinh1]}`)
            this.danhsach[id-1][danhsachthuoctinh[thuoctinh1]] = thuoctinh1m       
        }   

        let thuoctinh2 = danhsachthuoctinh.indexOf('tacgia')
        if(thuoctinh2 != -1){
            let thuoctinh2m = prompt(`Nhap vao ${danhsachthuoctinh[thuoctinh2]}`)
            this.danhsach[id-1][danhsachthuoctinh[thuoctinh2]] = thuoctinh2m       
        }  
        let thuoctinh3 = danhsachthuoctinh.indexOf('theloai')
        if(thuoctinh3 != -1){
            let thuoctinh3m = prompt(`Nhap vao ${danhsachthuoctinh[thuoctinh3]}`)
            this.danhsach[id-1][danhsachthuoctinh[thuoctinh3]] = thuoctinh3m       
        }      
    }

    inDanhSach(){
         this.danhsach.forEach((value)=> {
              console.log(value);
         })
    }
}
