function Case() {
    const input = document.getElementById("inputted");
    return input.value = input.value.toUpperCase();
}

function Case2() {
    const set = document.getElementById("insert");
    return set.value = set.value.toLowerCase();
}

function Case3() {
    const main = document.getElementById("enter");
    return main.value = main.value.toLowerCase();
}

// console.log(inputed)
function submitForm(){
   const fullname = document.getElementById('inputted').value
const email =  document.getElementById('insert').value
const address =  document.getElementById('enter').value
const tel =  document.getElementById('put').value

document.getElementById("fullname").innerHTML = fullname;
document.getElementById("email").innerHTML = email;
document.getElementById("address").innerHTML = address;
document.getElementById("tel").innerHTML = tel;
} 


