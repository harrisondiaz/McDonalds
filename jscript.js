console.log("script load")
var form1 = document.getElementById("form");
var content =

form1.addEventListener("submit",function(event) {
    event.preventDefault();
    //const data = Object.fromEntries(new FormData(event.target).entries());
    //content.innerHTML = "<h1>"+data.name + data.last_name+data.email+data.birthday.toString()+data.address+data.telephone+data.height+data.password+data.bio+"</h1>"

    var name,last_name,email,email2, birthday,address, telephone,height, password, password2,bio
    let terms

    name = document.getElementById("name").value
    last_name = document.getElementById("last_name").value
    email = document.getElementById("email").value
    email2 = document.getElementById("confirm_email").value
    birthday = document.getElementById("birthday").value
    address = document.getElementById("address").value
    telephone = document.getElementById("telephone").value
    height = document.getElementById("height").value
    password = document.getElementById("inputPassword").value
    password2 = document.getElementById("inputPassword2").value
    terms = document.getElementById("flexSwitchCheckDefault").valueOf().value
    bio = document.getElementById("validationTextarea").value

    expresion = /\w+@\w+\.+[a-z]/;



    if(name==""||last_name==""||email==""||email2==""||birthday==""||address==""||telephone==""||height==""||password==""||password2==""||bio==""){
        alert("All is obligatory")
        return false;
    }else if (!expresion.test(email)){
        alert("Email is incorrect")
        return false;
    }else if (!email==(email2)){
        alert("Emails are diferents")
        return  false;
    }else if(password.length < 8){
        alert("Password is so short")
        return false
    }else if(password.length > 20){
        alert("Password is so long")
        return false
    } else if (!password==password2){
        alert("Passwords are diferents")
        return  false;
    }
    document.getElementById("info").innerHTML = "<h1>"+name + last_name+email+birthday.toString()+address+telephone+height+password+bio+"</h1>"

})
