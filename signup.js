
    document.querySelector("#form").addEventListener("submit",signupFun)
    
    var signupArr = JSON.parse(localStorage.getItem("signupList")) || [];

    function signupFun(){

        event.preventDefault();

        var signupObj = {

            personEmail: form.email.value,

            personPassword: form.password.value,

            personconPassword: form.conPassword.value,
        };  

        signupArr.push(signupObj)
        console.log(signupObj)

        localStorage.setItem("signupList",JSON.stringify(signupArr));

        document.getItem(JSON.parse(localStorage,check()))

        function check(){


            var a = document.getElementById("password").value;
            var b = document.getElementById("conPassword").value;
    
            if(a==b){
    
                alert("Signup sucessfully")
              window.location.href = "index.html";
            }
            else{
    
                alert("Password Doesn't match")
            }
        }

        // window.location.href="login.html";

    }


   
