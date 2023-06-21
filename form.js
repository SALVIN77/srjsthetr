var x = document.getElementById("user")
var err =document.getElementById("err")
var p = document.getElementById("pass")
var err1 = document.getElementById("err1")
//function change(){
   // alert("clicked")
   // x=document.getElementById("user")
   // x.style.backgroundColor="yellow"
//}



//function back(){
    //x.style.backgroundColor = "white"
 //   x.style.border = "2px solid red"
//}

x.addEventListener("keyup",function(e){
console.log(x.value)
})

function validatename(){
    //alert("clicker")
    if(x.value.trim()==""){
        err.innerText="user name cannot be empty"
        x.style.border = "2px solid red"
        return false
    }
    else if(x.value.length<3){
        err.innerText="user name shoud be more than 3 char"
        x.style.border = "2px solid red"
        return false
    }

    else{
    err.innerText=""
    x.style.border = ""
    }
    return true
}

function validatepass(){
    if(p.value.trim()==""){
        p.style.border="2px solid red";
        err1.innerText="password should not be empty";
        return false;
    }
    else{
        err1.innerText="";
        p.style.border="2px solid green";
        return true
    }
}

function validateForm(){
    if(!validatename()|| !validatepass()){
    return false
}
else{
    return true
}
}