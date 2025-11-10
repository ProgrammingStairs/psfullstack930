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

var productArr = [];
function addProduct(){
    var productName = document.getElementById("productName").value;
    var description = document.getElementById("description").value;
    var category = document.getElementById("category").value;
    var file = document.getElementById("file").value;
    var email = sessionStorage.getItem("email");
    var obj = {productName,description,category,file,email};
    productArr = JSON.parse(localStorage.getItem("productData"));
    localStorage.setItem("productData",JSON.stringify([...productArr||[],obj]));
    alert("Product added successfully");
}

function updateProduct(index){
    var arr=JSON.parse(localStorage.getItem("productData"));
    alert(index);
    console.log(arr[index]);
    localStorage.setItem("updateProduct",JSON.stringify(arr[index]));
}

function updateProductData(){
    alert("check");
    var productName = document.getElementById("productNameUpdate").value;
    alert(productName);
    var description = document.getElementById("descriptionUpdate").value;
    alert(description);
    var category = document.getElementById("categoryUpdate").value;
    alert(category);
    var file = document.getElementById("file")?.value;
    alert(file);
    var fileHold = document.getElementById("fileHold").value;
    alert(fileHold);   
    alert(productName+" "+description+" "+category+" "+file+" "+fileHold);
}