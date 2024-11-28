export const FormValidation= (email,password)=>{
const message=[];
const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if(!isemailvalid){
document.getElementById("emailerror").innerText="Email is not valid";
message.push("Email is not valid");
}
if(!ispasswordvalid){
    document.getElementById("passworderror").innerText="Password is not valid";
    message.push("Password is not valid");
}
if(message.length===0){
  document.getElementById("emailerror").innerText="";
  document.getElementById("passworderror").innerText="";
}
 return message.length;
}

export const SignFormValidation=(email,password,name)=>{
  let message=0;
  message=FormValidation(email,password);
  if(!name){
    document.getElementById("nameerror").innerText="Name is not valid";
    message+=1;
  }
  else{
    document.getElementById("nameerror").innerText="";
  }
  return message;
}
