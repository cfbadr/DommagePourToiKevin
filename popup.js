
var ref = new Firebase('https://burning-torch-2085.firebaseio.com/');

ref.authWithPassword({
  email    : email,
  password : password
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

$("#submit").click(function(){
	// appel ajax, enregistrement ? ici ou sur la landing page ?
});

$("#connexion").click(function(){
	//ouvrir le login ?
});

$("#inscription").click(function(){
	chrome.tabs.create({url: "http://www.google.com"});
});
