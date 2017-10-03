var arguments = {0:'tom',1:'marry',length:2};
console.log(Array.from(arguments));
console.log(Array.from('qbcdef'));	//split('')
console.log(Array.of(1,2,3,4)) 	//参数

//数组排序 sort
var a = ["1","11","131",'1211'];
console.log(a.sort())  //question ?
// console.log(a.map((t,s)=> {return t-s })

//filter方法是用来过滤数组的，通过传入一个回调函数
//，如果元素通过回调函数的测试，则保留该元素，否则丢弃
var arr = [2,4,35,56,7];
console.log(arr.filter(function (val,index,arr) {
	return val%2 == 0;
}))

//reduct函数我们可以将其想象成一个累加器，从左到右依次将每个元素累加起来。
//求和
console.log([1,2,3,4].reduce(function(a,b) {
	//console.log(a,b,"a,b")  a 上次返回的值 ，b当前值
	return a+b;
}))
// 二维数组 转化 一维数组
console.log([[0,1],[2,3]].reduce(
	function (a,b) {
		return a.concat(b);b
	}
))
//计算每个数组中出现的次数
// var arr =['a','b','c','a'] ;
// console.log(arr.reduce(
// 	function(name,arr){
// 		if(arr in name) {
// 			name[arr]++;
// 		}else {
// 			name[arr]=1;
// 		}
// 		return name;
// }))

//map方法用来将数组转换成另外一个数组，通过传入的函数来进行转换

//forEach  reduce map for for in  while