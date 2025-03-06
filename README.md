# FinalProject
This is an astrology website, it features:

-   Login account system
-   Horoscopes
-   Sign Identification
-	Sign compatibility 
-	Astral Sign Guessing Game
-   Downloadable Wallpapers for each sign
-	Star Graph
-	Tarot Card Readings
-	Fortune Cookie


Below these ideas are expanded on

## Fundamental Website Components and Techniques

### Consistant Navigation Bar
A bar at the top that leads to important webpages, it puts an emphasis on the login button and the top left is the name of the site which leads to the homepage.

### Consistant styling defined in style.css
Use a similar theme for the background and font among elements, be sure to use classes for more specific use cases. Avoid using inline CSS as much as possible.

### Responsive Design
This is designing for multiple different types of devices and users, we need the webpages to respond to changes in webpage size.
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

#### Best Practices:

##### Media Queries
These are used to determine information about a user's screensize. We will use this to dynamically use single column layouts for narrow screens. Some content might even be disabled for certain screen sizes as a trade off for the user experience.

##### Flexboxes
These are boxes that are used to automatically resize

##### Fluid Images

##### Fluid Media Queries

##### Mobile Users
Mobile users tend to make more emotional decisions so our layout  should reflect that

Grid design
Using a grid means that our changes will adapt to mobile more easily. This is a neccasity especiallly if we are working on the same webpage as someone else. The best info out there is right here: 

TLDR: 

Use voxel height: vh and voxel width: vw which can express pixels in terms of the relative block.

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