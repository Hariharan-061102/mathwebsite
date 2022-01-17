function validate() {
    var user = document.getElementById("input1").value;
    var user1 = document.getElementById("input1");
    var re = /^\d+$/;
    if (re.test(user))
    return true;
    else {
    user1.style.border = "red solid 3px";
    return false;}
    }
    function validate1() {
    var user2 = document.getElementById("input2").value;
    var user3 = document.getElementById("input2");
    var re = /^\d+$/;
    if(re.test(user2))
    return true;
    else{
    user3.style.border = "red solid 3px";
    return false;}
    }
    function validate2() {
    var user = document.getElementById("input1").value;
    var user1 = document.getElementById("input1");
    var user2 = document.getElementById("input2").value;
    var user3 = document.getElementById("input2");
    var re = /^\d+$/;
    if(re.test(user) && re.test(user2)) {
    alert("done");
    return true; }
    else {
    alert("invalid input");
    return false; }
    }
    function validate3() {
    var user4 = document.getElementById("input3").value;
    var user5 = document.getElementById("input3");
    var re = /^\d+$/;
    if (re.test(user4))
    return true;
    else {
    user5.style.border = "red solid 3px";
    return false;}
    }
    function validate4() {
    var user6 = document.getElementById("input4").value;
    var user7 = document.getElementById("input4");
    var re = /^\d+$/;
    if (re.test(user6))
    return true;
else {
user7.style.border = "red solid 3px";
return false;}
}
function validate5() {
var user4 = document.getElementById("input3").value;
var user5 = document.getElementById("input3");
var user6 = document.getElementById("input4").value;
var user7 = document.getElementById("input4");
var re = /^\d+$/;
if(re.test(user4) && re.test(user6)) {
alert("done");
return true; }
else {
alert("invalid input");
return false; }
}
function volume() {
const num1 = document.getElementById("input1").value;
const num2 = document.getElementById("input2").value;
const vol = 0.5*num1*1*num2*1;
document.getElementById("output1").innerHTML = vol.toFixed(2)+" Meters"+"2".sup();
}
function area() {
const num3 = document.getElementById("input3").value;
const num4 = document.getElementById("input4").value;
const area = 2*(num3*1+num4*1);
document.getElementById("output2").innerHTML = area.toFixed(2)+" Meters";
}