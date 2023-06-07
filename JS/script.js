var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

var text = "hellow world"
document.getElementById("kirim").addEventListener('click', function(){
    console.log(text)
})

document.getElementById("input-nama").addEventListener('input', function(){
    var nama = document.getElementById("input-nama").value
    console.log(nama) 
})

function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;
                
    if (name == "" || date == "" || gender == "" || messages == "") {
        alert("Harap di Isi Semua");
        return;
    }
        
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = date;        
    document.getElementById("sender-gender").innerText = gender;        
    document.getElementById("sender-messages").innerText = messages;
    return false;
                
}