let str="aman";

let bag="";

for(let i=str.length-1; i>=0; i--){

bag+=str[i];
}
if(bag==str){
console.log("its a palindrome")}

else{
console.log("not a palindrome")}