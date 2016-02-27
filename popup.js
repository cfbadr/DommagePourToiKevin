
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
