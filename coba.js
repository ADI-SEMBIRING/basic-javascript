function luasPekarangan(a,b,c,d) {
console.log('a='+a)
console.log('b='+b)
console.log('c='+c)
console.log('d='+d)
//cek nilai parameter keperluad bug

 if (typeof(a)==='number'&&typeof(b)==='number' && typeof(c)==='number' && typeof(d)==='number'  ) {
   // cek type yang akan dimasukkan didalam argumen, agar yang bisa dimasukkan di dalam parameter hanya number

console.log('sini')
var LuaskamarA= a*b;
var LuaskamarB= c*d;

var hasil = LuaskamarA+LuaskamarB;

return hasil


   
 }else{
   console.log('parameter harus lengkap')

   return 0;
 }



}

console.log('hasil='+ luasPekarangan(1,2,3,4)); //argumen
// console.log('hasil='+ luasPekarangan(1,2));
