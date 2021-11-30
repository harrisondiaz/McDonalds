console.log("script load")
var form1 = document.getElementById("form");
var content = document.getElementById("here");

let burger1 = document.querySelector("#big_mac")
let burger2 = document.querySelector("#quarter_cheese")
let burger3 = document.querySelector("#double_quarter_cheese")
let burger4 = document.querySelector("#quarter_cheese_deluxe")
let burger5 = document.querySelector("#mcdouble")
let burger6 = document.querySelector("#quarter_cheese_bacon")
let burger7 = document.querySelector("#cheeseburger")
let burger8 = document.querySelector("#double_cheeseburger")
let burger9 = document.querySelector("#hamburger")
let text1 = document.querySelector("#text_big_mac")
let text2 = document.querySelector("#text_quarter_cheese")
let text3 = document.querySelector("#text_double_quarter_cheese")
let text4 = document.querySelector("#text_quarter_cheese_deluxe")
let text5 = document.querySelector("#text_mcdouble")
let text6 = document.querySelector("#text_quarter_cheese_bacon")
let text7 = document.querySelector("#text_cheeseburger")
let text8 = document.querySelector("#text_double_cheeseburger")
let text9 = document.querySelector("#text_hamburger")

burger1.addEventListener('click',()=> text1.style.color = 'red')
burger2.addEventListener('click',()=> text2.style.color = 'red')
burger3.addEventListener('click',()=> text3.style.color = 'red')
burger4.addEventListener('click',()=> text4.style.color = 'red')
burger5.addEventListener('click',()=> text5.style.color = 'red')
burger6.addEventListener('click',()=> text6.style.color = 'red')
burger7.addEventListener('click',()=> text7.style.color = 'red')
burger8.addEventListener('click',()=> text8.style.color = 'red')
burger9.addEventListener('click',()=> text9.style.color = 'red')


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

    const compare = document.getElementById("info");
    compare.innerHTML = "<p class='text-center fw-3'>Name:"+name+"<br>Last Name:" + last_name+"<br>Email:"+email+"<br>Birthday:"+birthday.toString()+"<br>Address:"+address+"<br>Telephone:"+telephone+"<br>Height:"+height+"<br>Password:"+password+"<br>Bio:"+bio+"</p>"

})
