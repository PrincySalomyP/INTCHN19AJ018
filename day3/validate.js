function validate(){

 
 var password = document.forms["empform"]["Password"].value;
 var name = document.forms["empform"]["Name"].value;


 




 if(name == ""){
  alert("Name field cannot be empty");
  return false;

 }
else if (!name.match(/[a-zA-Z]/)) 
    {
        alert('Name cannot have numbers  and Special characters');
        return false;
    }
	
	else if (name.length < 2 || name.length >  30)
    {
        alert('Name length should be between 2 to 30 characters ');
        return false;
    }
 
else if(password == ""){
  alert("Password field cannot be empty");
  return false;

 }

   
}