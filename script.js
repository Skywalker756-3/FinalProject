//Landing Page
// Define the navigateTo function
function navigateTo(url) {
    window.location.href = url; // Redirects to the specified URL
  }

//Sign Storage and Retrieval
/*
id of CurrentSign is used to replace the text of these elements with the user's current sign
id
*/

function SignDisplay()
{
  //This function changes the inner text of an element to match the user's current sign
  let sign = getSign()
  let elements = document.getElementsByClassName("CurrentSign")
  if(sign==null|sign==undefined)
  {
    sign="Sign unknown"
  }
  for(let i=0;i<elements.length;i++)
  {
    elements[i].innerText=sign
  }
}
setInterval(SignDisplay,100)
function signUpdateHandler(event)
{
  document.getElementsByClassName("signChangeButton")
}
addEventListener("click",signUpdateHandler)



//Sign management
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
  return 0
}
function hasSign()
{
  /*
  This function returns: 
  1 if the sign is in WebAPI storage
  2 if the sign is in account
  0 if the sign is not found
  
  Use the two helper functions to determine where the sign is.
  Priority is given in this function to the webAPI storage, incase the user wanted to see other signs
  */
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
  case 0: //sign not found
    return null;
  case 1: //Sign in webstorage
    return localStorage.getItem("CosmicCompass:sign")
  case 2: //Sign in account

  default: //something unintended happened
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

