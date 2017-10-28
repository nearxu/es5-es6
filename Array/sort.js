var arr = ['1','2','3'];

arr.forEach(function(item,index) {
    console.log(index,item);
})

console.log([...arr.keys()]);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
console.log(items.sort(function(a,b){
    if(a.value > b.value) return 1;
    if(a.value < b.value) return -1;
    return 0;
}))

var a = [1,21,12,35];
console.log(a.forEach(function(a,b) {
    return a-b;
}))