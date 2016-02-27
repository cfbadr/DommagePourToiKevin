
var ref = new Firebase('https://burning-torch-2085.firebaseio.com/');


var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", connect)

function connect() {
	alert("test")
	ref.authWithPassword({
  	email    : $("#email").val(),
  	password : $("#password").val()
	}, function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
    	console.log("Authenticated successfully with payload:", authData);
  	}
	});
}
