var arr = [];
function addUser(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("emailreg").value;
    var password = document.getElementById("passwordreg").value;
    var address = document.getElementById("address").value;
    var obj = {username,email,password,address};
    arr = JSON.parse(localStorage.getItem("data"));
    if(!arr)
        localStorage.setItem("data",JSON.stringify([...arr||[],obj]));
    else{
         const record = arr.find((obj)=>{
             return obj.email==email;
            });
            if(record)
                alert("Email Id already exist");
            else
                localStorage.setItem("data",JSON.stringify([...arr||[],obj]));
    }
}

function checkLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    arr = JSON.parse(localStorage.getItem("data"));
    if(arr){
    const record = arr.find((obj)=>{
             return obj.email==email && obj.password==password;
            });
            if(record){
                sessionStorage.setItem("email",email);
                return true;
            }
            else{
                alert("Email id or Password is wrong");
                return false;
            }
    }else{
        alert("No Record Found | Please Register First");
    }
}