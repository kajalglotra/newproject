 function validateEmail(email)
        {
       var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)){
       return true; }
       else{
         return false;
        }
    }
	  $(document).ready(function() {
      $("#register").click(function() {
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var cpassword = $("#cpassword").val();
      if (name == '' || email == '' || password == '' || cpassword == '') {
      alert("Please fill all fields...!!!!!!");
        } 
        else if ((password.length) < 8) {
          alert("Password should atleast 8 character in length...!!!!!!");
        }
        else if (!(password).match(cpassword)) {
          alert("Your passwords don't match. Try again?");
        }
        else if(!$("#terms").is(':checked')){
           alert("agree terms and condition checkbox");
        }
        else if(!validateEmail(email)){
            	alert("Not valid email address");

            }
         else {
        alert("done");
        $("form")[0].reset();
    }
      });
       });