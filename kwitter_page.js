var firebaseConfig = {
    apiKey: "AIzaSyAFs5Rs2_gbxoRfKdm1OIdxFjOpzo9SKAo",
    authDomain: "kwitter-fba6d.firebaseapp.com",
    databaseURL: "https://kwitter-fba6d-default-rtdb.firebaseio.com",
    projectId: "kwitter-fba6d",
    storageBucket: "kwitter-fba6d.appspot.com",
    messagingSenderId: "1007445870259",
    appId: "1:1007445870259:web:9acc48b4cbe8b98992d2c6",
    measurementId: "G-BJ1ZFNYE04"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name_fdb");
room_name = localStorage.getItem("ls_room_name");  

function send(){
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name : user_name,
           message : msg,
           like:0
     });
     document.getElementById("msg").value = " ";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
