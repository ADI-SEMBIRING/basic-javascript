var kendaraan=prompt('masukkan nama kendaraan')
switch(kendaraan){
      case 'mobil':
      case 'traktor':
      case 'truck':
      case 'sepeda motor':
      alert('anda memasukkan kendaraan darat!')
      break;
      case 'speedboat':
      case 'ferry':
      case 'tanker':
      alert ('anda memasukkan transportasi laut')
      break;
      case 'pesawat terbang':
      case 'jet':
      case 'helikopter':
      alert('transportasi udara')
      break;
      default:
            alert('kendaraan tidak dikenal')
      break;
}
