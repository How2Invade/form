let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editIndex = -1;

function addOrUpdateContact() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if(name === "" || email === "" || phone === ""){
    alert("All fields are required");
    return;
  }

  let contact = { name: name, email: email, phone: phone };

  if(editIndex === -1){
      contacts.push(contact);          // ADD
  } else {
      contacts[editIndex] = contact;   // EDIT
      editIndex = -1;
  }

  localStorage.setItem("contacts", JSON.stringify(contacts)); // SAVE
  clearForm();
  displayContacts();
}

function displayContacts() {
  document.getElementById("contactList").innerHTML = "";

  for(let i=0; i < contacts.length; i++){
    let c = contacts[i];

    let box = document.createElement("div");
    box.className = "contact-box";

    box.innerHTML =
      "<b>Name:</b> " + c.name + "<br>" +
      "<b>Email:</b> " + c.email + "<br>" +
      "<b>Phone:</b> " + c.phone + "<br><br>" +
      "<button onclick='editContact("+i+")'>Edit</button> " +
      "<button onclick='deleteContact("+i+")'>Delete</button>";

    document.getElementById("contactList").appendChild(box);
  }
}

function editContact(i){
  let c = contacts[i];
  document.getElementById("name").value = c.name;
  document.getElementById("email").value = c.email;
  document.getElementById("phone").value = c.phone;

  editIndex = i;
}

function deleteContact(i){
  contacts.splice(i, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts)); // SAVE AFTER DELETE
  displayContacts();
}

function clearForm(){
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

displayContacts();  // SHOW CONTACTS ON PAGE LOAD