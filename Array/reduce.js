function redu(arr) {
	arr.reduce(function (a,b){
		console.log(a+b,"a+b");
		return a+b;
	})
}

// console.log(redu([1,2,3,4]))
console.log("a".concat('b'));

console.log("123456".slice(1,2))  //下表

console.log("123456".substring(1,2))

console.log("123456".substr(1,1))