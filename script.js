//your JS code here. If required.
let btn=document.getElementById("submit-btn");

btn.addEventListener("click",()=>{
	event.preventDefault();
	let firstName=document.getElementById("fName").value;
	let lastName=document.getElementById("lName").value;
	let phoneNo=document.getElementById("phone").value;
	let emailId=document.getElementById("email").value;
	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNo} Email ID: ${emailId}`)
})

