var arr = [1,2,3,4,5];
arr.forEach(function(val){
    console.log(val + " hello");
})


var arr = [1,2,3,4];
var newarr = arr.map(function(val){
    return val*2;
})
console.log(newarr);


var arr = [1,2,3,4,5,6];
var ans = arr.filter(function(val){
    if(val > 3){ return true;}
    else return false;
})
console.log(ans);


var arr = [1,2,3,4,5];
var ans = arr.find(function(val){
    if(val === 2) return val;
})
console.log(ans);


var obj = {
    name: "Priyansh",
    age: 21,
    address: "Gohad"
}
