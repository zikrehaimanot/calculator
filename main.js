document.getElementById("sum").onclick= addUp
document.getElementById("diff").onclick= subbDown
document.getElementById("prod").onclick= prodUp
document.getElementById("remain").onclick= divUp


function addUp(){
  var a =parseFloat(document.querySelector("#num1").value);
  var b =parseFloat(document.querySelector("#num2").value);
  var solution= a+b
  document.getElementById("answer").innerHTML=solution;
}

function subbDown(){
  var a =parseInt(document.querySelector("#num1").value);
  var b =parseInt(document.querySelector("#num2").value);
  var solution= a-b
  document.getElementById("answer").innerHTML=solution;

}

function prodUp(){
  var a =parseInt(document.querySelector("#num1").value);
  var b =parseInt(document.querySelector("#num2").value);
  var solution= a*b
  document.getElementById("answer").innerHTML=solution;
}

function divUp(){
  var a =parseInt(document.querySelector("#num1").value);
  var b =parseInt(document.querySelector("#num2").value);
  var solution= a/b
  document.getElementById("answer").innerHTML=solution;
}
