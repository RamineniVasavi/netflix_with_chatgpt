export const FormValidation= (email,password)=>{
const message=null;
const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if(!isemailvalid){
return "Email is not valid";
}
else if(!ispasswordvalid){
    return "Password is not valid";
}
 return null;
}

export const Namevalidation=(name)=>{
  if(!name){
    return "Enter Name";
  }
  return null;
}
