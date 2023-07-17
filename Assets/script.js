alert("Open to Console")
function all(q){
var a=q.filter(function(val){
        return val%2==1;
    })
var z=a.map(function(num){
    return num*num
})
console.log("After Array "+z);
}
var c=[1,2,3,4,5,6,7,8,9,10]
console.log("Before Array "+c);
all(c);