const input = document.getElementById("input");
const output = document.getElementById("output");

function Message(){
  output.innerHTML += input.value;
  input.value = "";
}

function Clear(){
  output.innerHTML  = "";
}