HTML AND BOOTSTRAP

I emulated Reddit.

1. Bootstrap Cards- using Bootstraps card components I recreated the look of a post on Reddit. With the subreddit on top, a title under that, the content pictures/gifs displayed under that, then three buttons for upvote, comment, or share. For one of the cards I embeded a gif from giphy.

2. Carousel- In a single row I have a a vertical nav bar like Reddit, a Carousel for pictures being displayed, and another div for popular communities. Both of the columns on either side of the carousel disappear when the viewport gets small enough for better responsiveness.

3. Nav Bar- I tried to emulate the look and feel of Reddits Nav Bar. It is a sticky nav. Reddits logo links to home page, the search bar is justified in the center, and the login and signup buttons link to other pages. I used Bootstraps "pills" class to function as buttons on the nav. This also worked with just using buttons.

4. Login Button- Clicking on the login button leads to a table displaying popular Redditors. Table is striped and bordered for better readability. I also added a caption above the table so you know what info the table is displaying. 

5. Signup Button and Accordian- The Signup goes to a simple singup form with validation using the "required" attribute. There is an accordian underneath taken from the Bootstrap website to display FAQ's. 

TROUBLESHOOTING- It took me a while to get the Bootstrap features to work because I didn't realize I needed the Javascript script tag in the metadata. I meeting with my SSM quickly solved that.

JAVASCRIPT

1. First function checks to see is the username entered has at least 8 characters.

2. 2nd function also requires HTML, however I was just trying to follow the logic and I got some help from stack overflow. The idea is to add another user to the table after they have entered their information. 

3. Third function ensures there is no spaces in a password entered by using the trim() method to remove any spaces in the password entered.

4. Fourth function is designed to Alert the user when they complete signup. It uses a Template Literal to turn my name variable into a string.

5. Fifth function checks the users age using an if..else statement and logs a different message.