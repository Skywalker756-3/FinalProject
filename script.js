// General script
function navigateTo(url) {
  window.location.href = url; // Redirects to the specified URL
}
// Toggle the navigation links when the hamburger button is clicked
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Home Page - Interactive zodiac signs (click to display horoscope)
const signs = document.querySelectorAll(".zodiac-sign");
const horoscopeDisplay = document.getElementById("horoscope-display");
const instructions = document.getElementById("instructions");

signs.forEach(sign => {
  sign.addEventListener("click", () => {
    const horoscope = sign.getAttribute("data-horoscope");
    horoscopeDisplay.textContent = horoscope;
    horoscopeDisplay.style.opacity = "1"; // Display horoscope
    horoscopeDisplay.style.display = "block"; // Ensure visibility
    instructions.style.display = "none"; // Hide instructions on click
  });
});

//Horoscope Page
// Sign Storage and Retrieval
function SignDisplay() {
  let sign = getSign();
  let elements = document.getElementsByClassName("CurrentSign");
  if (sign == null || sign == undefined) {
    sign = "Sign unknown";
  }
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = sign;
  }
}
setInterval(SignDisplay, 100);

function signUpdateHandler(event) {
  document.getElementsByClassName("signChangeButton");
}
addEventListener("click", signUpdateHandler);

// Sign management functions
function hasSignTempStorage() {
  if (localStorage.getItem("CosmicCompass:sign") == null) {
    return 0;
  }
  return 1;
}

function hasSignAccount() {
  return 0; // Placeholder for account logic
}

function hasSign() {
  if (hasSignTempStorage() == 1) {
    return 1;
  } else if (hasSignAccount() == 1) {
    return 2;
  }
  return 0;
}

function getSign() {
  let signLocation = hasSign();
  switch (signLocation) {
    case 0: 
      return null;
    case 1: 
      return localStorage.getItem("CosmicCompass:sign");
    case 2: 
    default: 
      return null;
  }
}

function setSign(sign) {
  localStorage.setItem("CosmicCompass:sign", sign);
}

//Horoscope Page
function horoscopeSwapper()
{
  //getSign returns a astrology name or null
  sign = getSign().toString()
  imagesource ="./images/horoscopes/".concat(sign).concat(".png")
  imagealt = "An image of your Zodiac sign: ".concat(" ",sign)

  //switch statement to change the text of the horoscope
  document.getElementById("horoscopeImage").setAttribute("src",imagesource)
  document.getElementById("horoscopeImage").setAttribute("alt",imagealt)
  switch(sign)
  {
    case "Aquarius":
      document.getElementById("horoscopeText").innerText="Hello, Aquarius. Today your innovative mindset shines brightly and guides you to explore new ideas. You are encouraged to embrace unconventional approaches and engage in creative conversations. Trust your intuition when navigating challenges and let your unique perspective inspire those around you. Balance your logical insights with emotional awareness, and welcome unexpected opportunities for growth. Enjoy a day of authentic self-expression and meaningful connection."
      break;
    case "Aries":
      document.getElementById("horoscopeText").innerText="Hello, Aries. Today, your energy is abundant and your pioneering spirit is ignited. Mars energizes your natural assertiveness and inspires you to lead boldly. You feel confident starting new projects and taking initiative. Be mindful to temper your impulsiveness with thoughtful reflection. Embrace the day with dynamic enthusiasm. Let your inner fire guide you to success."
      break;
    case "Cancer":
      document.getElementById("horoscopeText").innerText="Hello, Cancer. Today your sensitivity is heightened by the gentle influence of the Moon. You feel deeply connected to your emotions and to those around you. Nurture your relationships and create a comforting home environment. Engage in creative activities that bring you calm and joy. Take time for self-care and thoughtful reflection. Set clear boundaries to protect your energy. Trust your intuition to guide your decisions. Embrace the day with quiet strength and balance."
      break;
    case "Capricorn":
      document.getElementById("horoscopeText").innerText="Hello, Capricorn. Today your steady, ambitious nature serves as your anchor. Saturn fuels your discipline and structure. Set clear, realistic goals. Every small step builds your long-term success. Remember that even the most dedicated individuals need moments of rest and self-care. Trust your pragmatic outlook to break down complex situations into manageable tasks. Apply logical solutions to overcome challenges at work and in your personal life. Cherish time with loved ones through thoughtful conversations and shared laughter."
      break;
    case "Gemini":
      document.getElementById("horoscopeText").innerText="Hello, Gemini. Today your vibrant communication skills guide you through engaging interactions. Your ruling planet Mercury enhances your curiosity and adaptability. Embrace opportunities for lively conversation and new connections. Stay flexible when unexpected changes arise. Focus on sharing your creative ideas with those around you. Enjoy a day of intellectual exploration and meaningful dialogue."
      break;
    case "Leo":
      document.getElementById("horoscopeText").innerText="Hello, Leo. Today your radiance and creativity bring warmth and confidence. Your natural leadership is highlighted and encourages you to take center stage. You feel strong and motivated to express your passionate ideas. It is the perfect day to celebrate your unique talents and inspire those around you. Maintain a balanced approach and welcome insights from others. Embrace your creativity and let your inner light shine brightly."
      break;
    case "Libra":
      document.getElementById("horoscopeText").innerText="Hello, Libra. Today your natural desire for harmony guides you through social interactions, and you find peace in mediating differences. Your balanced outlook encourages fair communication and creative collaboration, fostering mutual understanding with those around you. You trust your intuition when making decisions and seek beauty in both art and nature. Embrace the day with grace, knowing that your diplomatic nature brings clarity and balance to every situation."
      break;
    case "Pisces":
      document.getElementById("horoscopeText").innerText="Hello, Pisces. Today your intuitive nature is your greatest asset. You feel a strong connection to your inner emotions and the world around you. Creative ideas flow easily, and you find inspiration in unexpected places. Trust your inner guidance and listen closely to your dreams. Balance your sensitivity with practical actions, and embrace moments of quiet reflection. Enjoy a day enfolded in artistic expression and gentle compassion."
      break;
    case "Sagittarius":
      document.getElementById("horoscopeText").innerText="Hello, Sagittarius. Today your adventurous spirit prompts you to explore new horizons. You welcome change and discover opportunities that broaden your perspective. Your optimism shines and draws like-minded individuals to you. Trust your intuition as it guides you through new experiences and insights. Enjoy a day filled with exploration, growth, and thoughtful adventure."
      break;
    case "Scorpio":
      document.getElementById("horoscopeText").innerText="Hello, Scorpio. Today your intuition and intensity guide you through challenges with clarity. Trust your inner voice when making decisions. Your passion helps you uncover hidden truths. Embrace transformative opportunities with both determination and patience. Enjoy a day of deep insights and meaningful connections."
      break;
    case "Taurus":
      document.getElementById("horoscopeText").innerText="Hello, Taurus. Today your grounded nature and practical mindset provide you with the stability you need to face challenges confidently. You value comfort and consistency, allowing you to approach tasks with patience and clear focus. Enjoy the simple pleasures of life and nurture your relationships with care. Trust your intuition when making decisions, and let your steady determination guide you toward lasting progress."
      break;
    case "Virgo":
      document.getElementById("horoscopeText").innerText="Hello, Virgo. Today your practical nature and keen attention to detail guide you in all your endeavors. You approach tasks methodically and make decisions based on careful analysis. Your ability to organize and prioritize brings clarity to both work and personal matters. Embrace the satisfaction of small, well-earned achievements and maintain a focus on balanced self-care."
      break;
    default:
      break;

  }
}
addEventListener("DOMContentLoaded",horoscopeSwapper)
addEventListener("click",horoscopeSwapper,)


/*
Sign management
*/
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
function SignDisplay()
{
  //This function changes the inner text of an element to match the user's current sign
  let sign = getSign()
  let elements= document.getElementsByClassName("CurrentSign")
  if(sign==null)
  {
    sign=""
  }
  for(let i=0;i<elements.length;i++)
  {
    elements.item(i).innerText=sign
  }
}
setInterval(SignDisplay,100)
//Blog Page 
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
};

//Sign up Page 
//Sign Up Page - Form submission
  // Adds an alert when a form is submitted successfully
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
  });
