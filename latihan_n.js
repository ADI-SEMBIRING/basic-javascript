var b ='';
var a = 0;

 for (a; a<10; a++){
   for(var c=0; c<=a; c++){
    b +='*';
   }
      b +='\n';
 }
//  console.log(b)


 for (var x=10; x>=0; x--){
   for(var y=0; y<x; y++){
    b +='*';
   }
      b +='\n';
 }
 console.log(b)