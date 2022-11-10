const firebaseConfig = {
    apiKey: "AIzaSyDGBpxufLsY2-44jA4DhR0JyR5BWWhXrHM",
    authDomain: "login-721a9.firebaseapp.com",
    projectId: "login-721a9",
    databaseURL: "https://login-721a9-default-rtdb.firebaseio.com/",
    storageBucket: "login-721a9.appspot.com",
    messagingSenderId: "419864292973",
    appId: "1:419864292973:web:cd717653ac07c0505ed964"
  };

const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var email = document.getElementById("email").value; 
  var username = document.getElementById("username").value; 
  var password = document.getElementById("password").value; 
  
  detailsRef.push().set({ 
    email: email, 
    username: username, 
    password: password, 
  });
}