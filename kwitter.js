function addUser(){
    name1 = document.getElementById("user_name").value;
    localStorage.setItem("user_name_fdb", name1);
    window.location = "kwitter_room.html";
}

