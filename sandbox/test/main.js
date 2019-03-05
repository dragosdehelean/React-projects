// function sockMerchant(n, ar) {
//   let store = [];
//   for (var i = 0; i < n; i++) {
//     if (store.map(item => item.id).indexOf(ar[i]) === -1) {
//       store.push({ id: ar[i], nr: 1 });
//     } else {
//       store = store.map(item => (item.id === ar[i] ? { ...item, nr: item.nr + 1 } : item));
//     }
//   }
//   console.dir(store);
//   return store.filter(item => item.nr > 1).reduce((tot, item) => tot + Math.floor(item.nr / 2), 0);
// }

function sockMerchant(n, ar) {
  let perechi = 0;
  while(ar.length > 0){
    let prez = ar.shift();
    if(ar.indexOf(prez) !==  -1){
      ar.splice(ar.indexOf(prez), 1);
      perechi ++
    }
  }  
  return perechi;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
