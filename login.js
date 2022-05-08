//var signupArr = JSON.parse(localStorage.getItem("signupList")); 
// console.log(signupArr)
//document.querySelector("#form1").addEventListener("submit",formSubmit)

// var form1 = document.querySelector("#form1")

// function formSubmit(event){


//     event.preventDefault();
//     var form1=document.getElementById("form1")

//      var a =  form1.email.value;

//      var b = form1.password.value;

//      var c = JSON.parse(localStorage.getItem("signupArr"))
   
//     var flag = true;
    // for(var i = 0;i<signupArr.length;i++)
    //  {
      
    //     if(signupArr[i].personEmail != a && signupArr[i].personPassword!=b){

    //         flag == false;
          
    //     }
        
     
      
    //  }
    // if(flag == true){

    //     alert("login sucessful")
    // }
    // else if(flag==false){

    //     alert("login unsucessful")
    // }
   
//}

// function login(){

//     event.preventDefault()

//     var email = document.getElementById("email").ariaValueMax;

//     var password = document.getElementById("password").ariaValueMax;

//     var personEmail = localStorage.getItem("email");

//     var personPassword = localStorage.getItem("password");

//     if(email== personEmail &&  password == personPassword){

//         alert("login successful")
//     }
//     else{

//         alert("login unsucessful")
//     }
// }

document.querySelector("#form1").addEventListener("submit",login)

var loginArr = JSON.parse(localStorage.getItem("signupList"))

console.log((loginArr))

function login(event){

    event.preventDefault();

    var email = document.querySelector("#email").value;

    var password = document.querySelector("#password").value;

    if(loginArr.length>0){

        for(var i = 0;i<loginArr.length;i++){

            console.log((loginArr[i].email,email,loginArr[i].password,password))

            if(loginArr[i].email==email &&loginArr[i].password == password){

                alert("login sucessful")
                break;
            }
            else{

                if((loginArr.length-1)==i){

                    alert("login Sucessfully")
                    window.location.href = "index.html"
                }

            }

        }

    }
}