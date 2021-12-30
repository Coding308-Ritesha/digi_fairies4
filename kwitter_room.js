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



var user_name_fetched = localStorage.getItem("user_name_fdb");
document.getElementById("wel_display_user_name").innerHTML = "Welcome " + user_name_fetched + "!";


function addRoom(){
       room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("ls_room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name_row' id =" + Room_names + " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name_ls",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name_fdb");
      localStorage.removeItem("ls_room_name");
      window.location = "index.html";
}
