# FinalProject
This is an astrology website, it's key features are:

-   Horoscopes
-   Home page
-   Blog
-   Lunar phases
-   Sign Identification
-	  Sign compatibility 
-   Matching game sign to pictures
-   Newsletter

# User Guide to Cosmic Compass
Welcome to our guide on the website Cosmic Compass, if you're reading this you likely have a high interest in Astrology or webdesign. Either way this guide will help you to navigate, and make discoveries on our site.

## Homepage
This is the opening page where you can quickly get a glimpse of your horoscope of the day. Further down we can find widgets that lead to our horoscopes, compatibility test and blog.

## Horoscope
This is the page that will show you're daily horoscope, all you have to do is click on your zodiac symbol, if you're not aware it is indicated in the image and the alternate text.

## Game
This page has two different games, the compatibility test and the matching game. To play them you can scroll down and find detailed instructions on each game beside them.

## Log In / Sign Up
This is where you can create an acccount or log in if they have an existing account, this allows you to keep progress as a user.

## Newsletter
This is a portion where you can sign up for newsletters which mark interesting discoveries in astrology and send out weekly emails with the lateset news.

## Blog
This is an opinion piece from some of the top minds in Astrology, here you can learn in depth knowledge about astrology including moon patterns, historical context and star locations.


## Test 1
This was a test during a protype iteration of the website, we had a theme of purple and yellow with small amounts of yellow. The user was confused about what was and wasn't a button because the design was too intricate. To accomidate we removed alot of distracting parts of the website.

## Test 2
This test was focused on the game and the user's direct behaviour in it. We learned that it wasn't clear that the player had won the matching game and the user couldn't reset the game without reloading the page. We made adjustments thaty added these features.

## Test 3
This test restructured our website, we learned that the user actually scrolled past some of our content to get to where he wanted to go, which might have been a sign that we have a prioritization problem and a testing problem since in the previous tests users did not navigate as they would outside of a test because they were not scanning like an expected user.

## Test 4
We restructured our test to have a more disassociated version where instead of informing the user that this was a test we instead opted to find their compatibility with this site. It proved successful, the user navigated to the game page and ran the compatibility game quickly.

## Test 5
This final test was also prompted. We got the user who saw the prototype to discuss the homepage, it seemed like she liked it so we ended up keeping the design since we learned that it's ideal for navigation and style purposes.

# Website Design Components and Techniques and Tools

### HTML
Neccarary for designing formats in a website

### CSS 
Needed for styling the website

### Javascript
Added functionality and behaviour to website.

### GIMP
A simple design tool for advanced image manipulation

### Git/ Github
Versioning system + an online repository

### Discord
Online interfacing with team

### New script tradeoff
Whenever we add a new script file the browser has to load that in-between webpages which can reduce the user experience. However loading a very heavy script in would reduce the time to enter the website in general. So we try to find a balance where we give script heavy webpages their own script.

### Load Script Last
In general we load the scripts in last to prevent the page from being viewable without the visual elements, this is a small tradeoff for enhancing the user experience.

### Consistant Navigation Bar
A bar at the top that leads to important webpages, it puts an emphasis on the login button and the top left is the name of the site which leads to the homepage this is useful for users that have a goal in mind when they are checking out a website because it's the first thing that users scan in a webpage.

### Consistant styling defined in style.css
Use a similar theme for the background and font among elements, be sure to use classes for more specific use cases. Avoid using inline CSS as much where possible.

### Responsive Design
This is designing for multiple different types of devices and users, we need the webpages to respond to changes in webpage size.

This link provides more in depth detail on responsive design and elaborates on the details.
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

### Best Practices for Responsive Design:

#### Media Queries

These are used to determine information about a user's system. For example this CSS code conditionally uses the inner CSS on a container if the webpage is being viewed as a screen media and there is at least 80rem wide space in it's current context.

``` CSS
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Some content might even be disabled for certain screen sizes as a trade off for the user experience.

#### Flexboxes

These are containers that automatically resize to fit their children; by default it fits them all at an equal size. We usually implement flexboxes onto the div element, where we set it's class to one defined in the CSS file that has the key value of: "display:flex" For each child we can define their proportion of the flexbox using the "flex" property.


``` CSS
.container {
  display: flex;
}

.item {
  flex: 1;
}
```


We prefer flexboxes on content that will likely see many changes in the future. Especially user generated content.
#### CSS Grids

This approach let's us enforce a flexible layout regardless of how many children there are. Otherwise this is very similar to flexboxes. To implement this we use the "display:grid" in it's CSS class along with some variation of "grid-". It uses "fr" units which are a fraction of the available space

``` CSS
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```


We prefer to use CSS grid on things we want to keep consistent on the website. It's a good idea to frame out the consistent parts of the site to the grid like the header, navigation, footer etc.

#### Fluid Images / Video
 Some media types like images and video might expand past the flexbox. To mitigate this use a maximum on the pixel size to be 100% which refers to the max size of it's parent.

#### Responsive Text
This works differently from other responsiveness because we want to preserve user's ability to zoom into text. For the most part we use the aforementioned #Media Queries to set the fonts. Below is an example where mobile phones can't see the 4x scaled font.

``` CSS
html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```
*em is relative to the font of the element, rem is relative to the font of the parent element*

# Project Features

### Sign Choice
Users can choose their sign given multiple different

### Account Login/ Sign-up Page
A webpage where the user enters their email credentials to create an account or login to their existing account. This component is designed to be seemlessly intergrable with PHP functionality so that backend-support can be added immediently. As of currently the user account is not stored for security reasons.

### Daily horoscope
This is an element of the homepage, Hover over the element to reveal the horoscope.

### Lunar Phases and Astrology
A webpage that describes how the moon phase effects the user's personal astrology. f the user doesn't have an account or their sign isn't collected in the cookies then open[this interface](Select Astrological Sign) If already in the cookies, just reference them for the sign.

### Personalized Horoscopes
This is a webpage with personalized reading for the user based on their signs. These feature daily, weekly and monthly horoscopes. If the user doesn't have an account or their sign isn't collected in the webAPI storage, then they can choose their sign without an account.

### Zodiac Sign Compatibility Test
This is webpage that describes the relational compatibility of the user's sign with other signs. This reveals compatibility scores and describes the relationship.

### Astral Sign Guessing Game
This is a webpage that functinos as a game where given a celebrity, users have to 3 guesses to predict what sign a celebrity is. The user is directed to the 

### Reviews
This is a section that displays cards of user reviews, a user can make a review with their account and it's stored into the database. This will be at the bottome of the home webpage.

### Account links
These are links to our companies social media pages, this will be at the bottom of each webpage