//object literal
var mhs={
      nama: "adi",
      npm : "168400006",
      email:  "adisembiring@gmail.com",
      alamat: "kota batam",

}

var mhs2={
      nama :"budi",
      npm: "1627247",
      email:"hukum@gmail.com",
      alamat:"kota medan",
}
function  objekMahasiswa(nama, npm, email,alamat) {
      var mhs = {};
      mhs.nama=nama;
      mhs.npm=npm;
      mhs.email=email;
      mhs.alamat=alamat;
      return mhs;
      
}
var mhs3= objekMahasiswa("anto",16347747,"antp@gmail.com","bandung,")
// console.log ("mhs")

var mhs4= objekMahasiswa("fjdf",1234,"dfdddd", "cccccc,")



//oject Constractor


function Mahasiswa(nama,npm,email,alamat) {
this.nama=nama;
this.npm=npm;
this.email=email;
this.alamat=alamat;
      
}
var mhs5 = new Mahasiswa ("josep",12323,"jose@gmail.com","medan");