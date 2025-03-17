//Landing Page
// Define the navigateTo function
function navigateTo(url) {
    window.location.href = url; // Redirects to the specified URL
  }

//Sign Storage and Retrieval

function SignDisplay()
{
  //This is a temporary function to adjust the text of elements with the class "CurrentSign"
  //to the current sign. It is error prone so only use it as a placeholder
  document.getElementById("CurrentSign").innerText=getSign()
}
setInterval(SignDisplay,100)
function hasSignTempStorage()
{
  /* HELPER FUNCTION
  This function returns 1 if we have the user's sign from
  Webstorage API
  otherwise it returns 0
  */
  //Checks if the storage exists
  if(localStorage.getItem("CosmicCompass:sign")==null)
  {
    return 0
  }
  return 1
}
function hasSignAccount()
{
  /* HELPER FUNCTION
  This function returns 1 if there current user has an account and a sign with that account.
  (The latter should always be the case since we store account DOB)
  */

  //IMPLEMENT HERE
  return 1
}
function hasSign()
{
  /*
  This function returns: 
  1 if the sign is in WebAPI storage
  2 if the sign is in account
  0 if the sign is not found
  */

  //Use the two helper functions to determine where the sign is.
  if(hasSignTempStorage()==1)
  {
    return 1
  }
  else if(hasSignAccount()==1)
  {
    return 2
  }
  return 0
}
function getSign()
{
  /*
  Returns a string corresponding to the sign of the user, if unavailable it will return null
  */
 let signLocation = hasSign()
 switch(signLocation)
 {
  case 0:
    return null;
  case 1:
    return localStorage.getItem("CosmicCompass:sign")
    //This returns a string type!
    //But it's okay because javascript doesn't do type checking
  case 2:
    //Access database
  default:
    return null
 }
}
function setSign(sign)
{
  /*
  Given the String: "sign" set the WebAPI variable for the sign to match it
  */
  localStorage.setItem("CosmicCompass:sign",sign)
}

