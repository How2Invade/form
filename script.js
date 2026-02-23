let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editIndex = -1;

displayContacts();

function addOrUpdateContact() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  // Validation
  if(name === "" || email === "" || phone === ""){
    alert("All fields are required");
    return;
  }

  let contact = { name: name, email: email, phone: phone };

  if(editIndex === -1){
    contacts.push(contact);   // ADD NEW CONTACT
  } else {
    contacts[editIndex] = contact;  // UPDATE EXISTING CONTACT
    editIndex = -1;
  }

  saveContacts();
  clearForm();
  displayContacts();
}

function displayContacts(){
  document.getElementById("contactList").innerHTML = "";

  for(let i = 0; i < contacts.length; i++){
    let c = contacts[i];

    let box = document.createElement("div");
    box.className = "contact-box";

    box.innerHTML =
      "<b>Name:</b> " + c.name + "<br>" +
      "<b>Email:</b> " + c.email + "<br>" +
      "<b>Phone:</b> " + c.phone + "<br><br>" +
      "<button onclick='editContact("+ i +")'>Edit</button> " +
      "<button onclick='deleteContact("+ i +")'>Delete</button>";

    document.getElementById("contactList").appendChild(box);
  }
}

function editContact(index){
  let c = contacts[index];

  document.getElementById("name").value = c.name;
  document.getElementById("email").value = c.email;
  document.getElementById("phone").value = c.phone;

  editIndex = index;
}

function deleteContact(index){
  contacts.splice(index, 1);
  saveContacts();
  displayContacts();
}

function saveContacts(){
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
    
function clearForm(){
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}