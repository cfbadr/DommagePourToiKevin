
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

$("#submit").click(function(){
	// appel ajax, enregistrement ? ici ou sur la landing page ?
});

$("#connexion").click(function(){
	//ouvrir le login ?
});

$("#inscription").mouseover(function() {
    $(this).css("text-decoration","underline");
    $(this).css("cursor","pointer");
});

$("#inscription").mouseout(function() {
  $(this).css("text-decoration","");
  $(this).css("cursor","");
});

$("#inscription").click(function(){
	chrome.tabs.create({url: "http://www.google.com"});
});
