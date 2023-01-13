var arr = [];
let btn = document.getElementById('Submit');
let btnAdd = document.getElementById('addUser');
btnAdd.innerHTML = "Add User"
let formData = document.getElementById('formData');
formData.style.display = "none";

// document.getElementById('demo').innerHTML =
// `<table>
//   <tr>
//     <td> ${localStorage.getItem("name(1)")}</td>  
//     <td> ${localStorage.getItem("email(1)")}</td>  
//     <td> ${localStorage.getItem("password(1)")}</td>  
//     <td> ${localStorage.getItem("address(1)")}</td>  
//     <td> ${localStorage.getItem("phoneNumber(1)")}</td>  
//   </tr>

// </table>`

console.log(localStorage.length);
  // document.getElementById('data').innerHTML = `Name: ${localStorage.getItem("name("+i+")")} <br> Address: ${localStorage.getItem("address("+i+")")} <br> Password  ${ localStorage.getItem("password("+i+")") }`
  

btnAdd.addEventListener('click', () => {
  if (formData.style.display == "none") {
    btnAdd.innerHTML = "Remove";
    document.getElementById('formData').style.display = "block";
  } else {
    btnAdd.innerHTML = "Add User";
    document.getElementById('formData').style.display = "none";
  }
})


btn.addEventListener('click', (event) => {
  event.preventDefault()
  const Name = document.getElementById('name').value;
  const Email = document.getElementById('email').value;
  const Password = document.getElementById('password').value;
  const Address = document.getElementById('Address').value;
  const PhoneNumber = document.getElementById('PhoneNumber').value;
  //validations
  if (Name == "") {
    document.getElementById('name').placeholder = "please enter your name";
    document.getElementById('name').style.border = "2px solid red";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
    console.log(true);
    document.getElementById('email').placeholder = "please enter your email";
    document.getElementById('email').style.border = "2px solid red";
  } if (Password.length < 8) {
    document.getElementById('password').placeholder = "password must be 8 character long";
    document.getElementById('password').style.border = "2px solid red";
  } if (Address == "") {
    document.getElementById('Address').placeholder = "Please enter address";
    document.getElementById('Address').style.border = "2px solid red";
  } if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(PhoneNumber)) {
    console.log(true);
    document.getElementById('PhoneNumber').placeholder = "Please enter proper phone number";
    document.getElementById('PhoneNumber').style.border = "2px solid red";
  }
  if (Name != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email) && Email != "" && Password != "" && Address != "" && PhoneNumber != "" && /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(PhoneNumber)) {
    arr.push({ name: Name, email: Email, password: Password, address: Address, phonnumber: PhoneNumber });
    document.getElementById('formData').reset();
  }
  text = "<table>";
  for (var i = 0; i < arr.length; i++) {
    text += "<tr>";
    text += "<td>" + arr[i].name + "</td>"
    text += "<td>" + arr[i].email + "</td>"
    text += "<td>" + arr[i].password + "</td>"
    text += "<td> <button id='view' class='btn' onclick=view(" + i + ")> View </button></td>"
    text += "<td> <button id='editData' class='btn' onclick=editData(" + i + ")> Edit </button></td>"
    text += "<td> <button id='editData' class='btn' onclick=deleteData(" + i + ")> Delete </button></td>"
    text += "</tr>";
  }
  localStorage.setItem("name("+i+")",Name);
  localStorage.setItem("email("+i+")",Email);
  localStorage.setItem("password("+i+")",Password);
  localStorage.setItem("address("+i+")",Address);
  localStorage.setItem("phoneNumber("+i+")",PhoneNumber);
  console.log(localStorage.length);
  console.log(localStorage.getItem("name("+i+")"))
  text += "</table>"
  document.getElementById("demo").innerHTML = text;

//   document.getElementById('data').innerHTML = `<table>
//   <tr>
//     <td> ${localStorage.getItem("name("+i+")")}</td>  
//     <td> ${localStorage.getItem("email("+i+")")}</td>  
//     <td> ${localStorage.getItem("password("+i+")")}</td>  
//     <td> ${localStorage.getItem("address("+i+")")}</td>  
//     <td> ${localStorage.getItem("phoneNumber("+i+")")}</td>  
//   </tr>

// </table>`

  // document.getElementById('data').innerHTML = `Name: ${localStorage.getItem("name("+i+")")} <br> Address: ${localStorage.getItem("address("+i+")")} <br> Password  ${ localStorage.getItem("password("+i+")") }`

  // for(j=0;j<arr.length;j++){
  //   text1 += "<tr>";
  //   text1 += "<td>" + localStorage.getItem("name("+i+")") + "</td>";
  //   text1 += "<td>" + localStorage.getItem("address("+i+")") + "</td>"
  //   text1 += "<td>" + localStorage.getItem("password("+i+")") + "</td>"
  //   text1 += "<td> <button id='view' class='btn' onclick=view(" + i + ")> View </button></td>"
  //   text1 += "<td> <button id='editData' class='btn' onclick=editData(" + i + ")> Edit </button></td>"
  //   text1 += "<td> <button id='editData' class='btn' onclick=deleteData(" + i + ")> Delete </button></td>"
  //   text1 += "</tr>";
  // }
  // text1 += "</table>";
  // document.getElementById("demo").innerHTML = text1;
});




//Function for View data
function view(index) {
  document.getElementById('name').value = arr[index].name;
  document.getElementById('email').value = arr[index].email;
  document.getElementById('password').value = arr[index].password;
  document.getElementById('Address').value = arr[index].address;
  document.getElementById('PhoneNumber').value = arr[index].phonnumber;

  document.getElementById('Submit').style.display = "none";
  // btnSaveChanges.style.display = "none";
  //disable data
  document.getElementById('name').disabled = true;
  document.getElementById('email').disabled = true;
  document.getElementById('password').disabled = true;
  document.getElementById('Address').disabled = true;
  document.getElementById('PhoneNumber').disabled = true;

  btnAdd.addEventListener('click', () => {
    document.getElementById('formData').reset();
    document.getElementById('Submit').style.display = "block";
    document.getElementById('name').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('password').disabled = false;
    document.getElementById('Address').disabled = false;
    document.getElementById('PhoneNumber').disabled = false;
  })
}



//Function for delete data
function deleteData(index) {
  document.getElementById('name').value = arr[index].name;
  document.getElementById('email').value = arr[index].email;
  document.getElementById('password').value = arr[index].password;
  document.getElementById('Address').value = arr[index].address;
  document.getElementById('PhoneNumber').value = arr[index].phonnumber;
  document.getElementById('Submit').style.display = "none";
  var btnSaveChanges = document.getElementById('saveChanges');
  btnSaveChanges.innerHTML = "<button id='Delete' class='btn' onclick='deleteDatas(" + index + ")'> Delete </button>"
  var deleteBtn = document.getElementById('Delete');
  deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    arr.splice(index, 1);
    console.log(arr);
    text = "<table>";
    for (var i = 0; i < arr.length; i++) {
      text += "<tr>";
      text += "<td>" + arr[i].name + "</td>"
      text += "<td>" + arr[i].email + "</td>"
      text += "<td>" + arr[i].password + "</td>"
      text += "<td> <button id='view' class='btn' onclick=view(" + i + ")> View </button></td>"
      text += "<td> <button id='editData' class='btn' onclick=editData(" + i + ")> Edit </button></td>"
      text += "<td> <button id='editData' class='btn' onclick=deleteData(" + i + ")> Delete </button></td>"
      text += "</tr>";
    }
    text += "</table>"
    document.getElementById("demo").innerHTML = text;
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('Address').value = "";
    document.getElementById('PhoneNumber').value = "";
  })
  btnAdd.addEventListener('click', () => {
    document.getElementById('formData').reset();
    document.getElementById('Submit').style.display = "block";
    document.getElementById('Delete').style.display = "none";
    document.getElementById('name').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('password').disabled = false;
    document.getElementById('Address').disabled = false;
    document.getElementById('PhoneNumber').disabled = false;
  })
}



//Function for Edit Data
function editData(index) {
  console.log("Changing at this Indes ================", index)
  document.getElementById('name').value = arr[index].name;
  document.getElementById('email').value = arr[index].email;
  document.getElementById('password').value = arr[index].password;
  document.getElementById('Address').value = arr[index].address;
  document.getElementById('PhoneNumber').value = arr[index].phonnumber;
  var btnSaveChanges = document.getElementById('saveChanges');
  btnSaveChanges.innerHTML = "<button id='Edit' class='btn' onclick='editDatas(" + index + ")'> Edit </button>"
  document.getElementById('Submit').style.display = "none";
  // btnSaveChanges.style.display = "block";
  document.getElementById('name').disabled = false;
  document.getElementById('email').disabled = false;
  document.getElementById('password').disabled = false;
  document.getElementById('Address').disabled = false;
  document.getElementById('PhoneNumber').disabled = false;
  //Edit Data
  let btnEdit = document.getElementById('Edit');
  btnEdit.addEventListener('click', (event) => {
    console.log("Editing")
    event.preventDefault()
    const Name = document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const Password = document.getElementById('password').value;
    const Address = document.getElementById('Address').value;
    const PhoneNumber = document.getElementById('PhoneNumber').value;
    //validations
    if (Name == "") {
      document.getElementById('name').placeholder = "please enter your name";
      document.getElementById('name').style.border = "2px solid red";
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      console.log(true);
      document.getElementById('email').placeholder = "please enter your email";
      document.getElementById('email').style.border = "2px solid red";
    } if (Password.length < 8) {
      document.getElementById('password').placeholder = "password must be 8 character long";
      document.getElementById('password').style.border = "2px solid red";
    } if (Address == "") {
      document.getElementById('Address').placeholder = "Please enter address";
      document.getElementById('Address').style.border = "2px solid red";
    } if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(PhoneNumber)) {
      console.log(true);
      document.getElementById('PhoneNumber').placeholder = "Please enter proper phone number";
      document.getElementById('PhoneNumber').style.border = "2px solid red";
    }
    if (Name != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email) && Email != "" && Password != "" && Address != "" && PhoneNumber != "" && /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(PhoneNumber)) {
      // document.getElementById('formData').reset(); 
    }
    arr[index].name = Name;
    arr[index].email = Email;
    arr[index].password = Password;
    arr[index].address = Address;
    arr[index].phonnumber = PhoneNumber;
    console.log(arr);
    text = "<table>";
    for (var i = 0; i < arr.length; i++) {
      text += "<tr>";
      text += "<td>" + arr[i].name + "</td>"
      text += "<td>" + arr[i].email + "</td>"
      text += "<td>" + arr[i].password + "</td>"
      text += "<td> <button id='view' class='btn' onclick=view(" + i + ")> View </button></td>"
      text += "<td> <button id='editData' class='btn' onclick=editData(" + i + ")> Edit </button></td>"
      text += "<td> <button id='editData' class='btn' onclick=deleteData(" + i + ")> Delete </button></td>"
      text += "</tr>";
    }
    text += "</table>"
    document.getElementById("demo").innerHTML = text;
  })
  btnAdd.addEventListener('click', () => {
    document.getElementById('formData').reset();
    document.getElementById('Submit').style.display = "block";
    document.getElementById('Edit').style.display = "none";
    document.getElementById('name').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('password').disabled = false;
    document.getElementById('Address').disabled = false;
    document.getElementById('PhoneNumber').disabled = false;
  })
}








  // switch(index){
  //   case index:
  //     arr[index].name = document.getElementById('name').value;
  //     arr[index].email=document.getElementById('email').value
  //     arr[index].password=document.getElementById('password').value
  //     arr[index].address=document.getElementById('Address').value
  //     arr[index].phonnumber=document.getElementById('PhoneNumber').value
  //     break;
  // }
  // console.log(arr);

  // var arr = [{name:"jatin",lname:"ramanandi"}];
  // for (i in arr){
  //     console.log(Object.keys(arr[i]));
  //     arr[i].name="jack";
  // }
  // console.log(arr); 