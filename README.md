# FinalProject
This is an astrology website, it features:

-   Horoscopes
-   Home page
-   Blog
  -   Lunar phases
  -   Energy in the stars
-   Sign Identification
-	  Sign compatibility 
-   Matching game sign to pictures
-   Newsletter

Below these ideas are expanded on

## Fundamental Website Components and Techniques

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

## Important Features

### Astrological Sign Identification
This is an interface that lets users pick their sign, this sign will stay attached to the user's cookies. This way they won't need to repeatedly choose their sign if they don't have an account.

### Login to Account
This is either a webpage or dropdown menu that allows users to sign in with their credentials to a database, their credentials are encrypted using _________ and stored into a (mysql/nosql/sql) database along with their profile pic (Stored as longblob in databases). The account's purpose on this site is for personalization. This includes content based on the user's astrology sign.

### Account Sign-up Page
A webpage where the user enters their email and password along with a DOB which determines their sign. They can also optionally submit an image for their profile picture. After this they are automatically signed in.

### Daily horoscope
This is an element of the homepage, Hover over the element to reveal the horoscope. (How do we first check the user's sign? also mobile compatiblity?)

### Lunar Phases and Astrology
A webpage that describes how the moon phase effects the user's personal astrology. f the user doesn't have an account or their sign isn't collected in the cookies then open[this interface](Select Astrological Sign) If already in the cookies, just reference them for the sign.

### Personalized Horoscopes
This is a webpage with personalized reading for the user based on their signs. These feature daily, weekly and monthly horoscopes. f the user doesn't have an account or their sign isn't collected in the cookies then open[this interface](Select Astrological Sign) If already in the cookies, just reference them for the sign.

### Zodiac Sign Compatibility Test
This is webpage that describes the relational compatibility of the user's sign with other signs. This reveals compatibility scores and describes the relationship. If the user doesn't have an account or their sign isn't collected in the cookies then open[this interface](Select Astrological Sign) If already in the cookies, just reference them for the sign.

### Astral Sign Guessing Game
This is a webpage that functinos as a game where given a celebrity, users have to 3 guesses to predict what sign a celebrity is. The user is directed to the 

### Reviews
This is a section that displays cards of user reviews, a user can make a review with their account and it's stored into the database. This will be at the bottome of the home webpage.

### Account links
These are links to our companies social media pages, this will be at the bottom of each webpage

### Star Graph
This is a webpage with a graph of the stars, if users hover over / click a star system that is associated with an astrology then the information is expanded and users can read more.

### Tarot Card Reading
This one was suggested by the professor, I'd like your input for this one bc idk.

### Fortune Cookie
Likely going to be on the homepage. The user can click on a fortune cookie for a cute animation and then read some worldly advice. From here we can save the user's cookie opening to their browser's cookies. Users can open another fortune cookie in 24 hours.