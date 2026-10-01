const form=document.getElementById("regForm");
const course=document.getElementById("course");
const sessionDate=document.getElementById("sessionDate");
const seats=document.getElementById("seats");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");
const feedback=document.getElementById("feedback");
const fullName=document.getElementById("fullName");
sessionDate.min=new Date().toISOString().split('T')[0];
const workshops=["HTML Essentials","CSS Studio","JavaScript Lab"];
for(const workshop of workshops){const option=document.createElement("option");option.value=workshop;option.textContent=workshop;course.append(option);}
form.addEventListener("input",()=>{feedback.hidden=true;confirmPassword.setCustomValidity("");});
form.addEventListener("submit",(e)=>{
e.preventDefault();feedback.hidden=true;fullName.value=fullName.value.trim();
if(password.value.length<10){password.setCustomValidity("Password must be at least 10 characters");}else{password.setCustomValidity("");}
if(password.value!==confirmPassword.value){confirmPassword.setCustomValidity("The passwords must match.");}else{confirmPassword.setCustomValidity("");}
if(!form.reportValidity()){feedback.textContent="Check the highlighted fields and try again.";feedback.classList.add("error");feedback.hidden=false;return;}
const seatCount=seats.valueAsNumber;let bookingType="";if(seatCount===1){bookingType="Individual booking";}else{bookingType="Group booking";}
feedback.textContent=`${fullName.value} - ${course.value} on ${sessionDate.value} - ${bookingType} for ${seatCount} seat(s).`;feedback.className="success";feedback.hidden=false;
});