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

# Project Deliverables
## Project Proposal
### Title & Objective
This project's purpose is to inform and engage an audience with their zodiac symbol and their inherit meaning in a fun and exploratory way. They are also interested in how their sign reflects aspects of themselves.

The target audience is a demographic of people that are interested in astrology and have an interest of learning more about it.

### Technology Stack
#### General Website Technology
- HTML
- CSS
- Javascript
#### Wireframes and Design
- Figma
- GIMP
#### Version Control and Online Repository
- Visual Studio Code
- Github/Git

### User Flow
We see it as a common case that return users want to see their horoscope so a basic version is displayed with priority at the top of the homepage. From there we have a navigation bar that leads to various other links where users can interact with the website further. And further down the page we contextualize and link to the other parts of the website that will be described below.

User's that are interested in a more in depth horoscope can discover more about the foretellings of different zodiac signs on the horoscope page.

User's that are interested in new insights and discoveries in Astrology can sign up for a newsletter on the newsletter page.

User's that are interested in knowing their best matchup's in relationships can find it on the game page. On this page user's can also play an interactive game to test their knowledge of the zodiac symbols.

User's can learn what other people are saying on the blog page.

User's can also login or sign-up on the login page. This allows for connecting the front-end design with backend technology to store user data. But for the scope of the project this functionality is strictly front-end.

## Project Progress Report
### Wireframes & Mockups of UI
See attached in submission.
### User Personas & Accessibility Strategy
User personas' are...

In terms of accessibility; the website is fully adaptive to various screensizes. It has full keyboard functionality, it's also compatible with browser based color-blind modes, has alternative text for all it's images.
### Protoype Walkthrough


# Website Design Components and Techniques

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

# Website Features


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

# Design Documentation
## Color Palette
The website largely sticks to a palette of navy blue, white and yellow because they contrast well and accessibly, the darker blue serving the purpose of a subtle background that highlights the white and yellow content.

## Typography
For font choices we have choosen: Poppins, and Zen Tokyo Zoo which are imported google fonts. Zen was ideal for titles and subtitles because the font had a fun and stylish yet modernistic look that grabs attention and fit in with our theme. Julius was an ideal font for much of the body text because it served to give the text a simple modern look.

## Design Documentation
This group followed an Agile design flow which allowed for many dynamic changes and testing to occur providing us with ideal feedback as represented in the user experience documentation. We researched various different astrology sites and asked questions to people that were interested in astrology to get a sense of what type of content they would be interested in. From there we created a 

# User Experience Test & Evalutation

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