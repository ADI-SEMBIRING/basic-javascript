  var tanya=true;
  while (tanya) {

      var p= prompt('pilih: gajah,semut,orang')



      var com=  Math.random();

      if (com<0.34) {
            com='gajah';
      }else if(com>=0.34 && com < 0.67){
            com='orang;'
      } else{
            com='semut';
      }
      // console.log(com);
      var hasil='';

      if (p==com) {
            hasil='seri!';
      }else if (p=='gajah' ) {
      // // if com == 'orang';   {
      // //       hasil='menang';
      // // }   else{
      // //       hasil='kalah';
      // }
      hasil=(com=='orang') ? 'menang' : 'kalah!';
      } else if( p=='orang'){
      hasil =(com=='gajah') ? 'kalah' :' menang!';
      }else if (p=='semut'){
            hasil=(com=='orang') ?'kalah' : ' menang!';
      }else{
            hasil='memasukkan pilihan salah! !';
      }



      alert('kamu memilih : ' + p+ ' dan komputer memilih: ' + com + '\nMaka hasilnya: kamu '+ hasil);

tanya=confirm('lagi?');
 }

 alert('terimakasih sudah maen')