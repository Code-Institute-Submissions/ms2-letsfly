# <p align="center">Testing Report - Take to the Skies Memory Card Game</p>

## [**Contents**](#contents)
    - [Manual Testing](#manual-testing)
    - [Device Testing](#device-testing)
    - [Online Validations](#online-validations)
    - [Project Bugs and Solutions](#project-bugs-and-solutions)
    - [Remaining Bugs](#remaining-bugs)
    - [Testing User Stories](#testing-user-stories)

## Manual Testing 

The following steps were taken to ensure the site was performing as it should:

- Ensure the instructions button "How to Play" functions and a pop-up modal appears outlining the rules/instructions of the game:
![image](https://res.cloudinary.com/elerel/image/upload/v1612624857/how2play_jjr3zk.png)

- Ensure the modal provides a short-cut to the game or the user is directed back to the home-page:
![image](https://res.cloudinary.com/elerel/image/upload/v1612624949/startgame_yjnwrk.png)

- Ensure that when the user clicks "Start Game", they are redirected to the Game Page:
![image](https://res.cloudinary.com/elerel/image/upload/v1612625129/gamepage_ze4how.png)

- Ensure that the user has a way to return to the main/home page if they need to review instructions:
![image](https://res.cloudinary.com/elerel/image/upload/v1612625268/backreset_vs5hn7.png)

- Ensure the game begins and countdown timer begins when the first card is clicked:
![image](https://res.cloudinary.com/elerel/image/upload/v1612625410/firstclick_knkq8t.png)

- Ensure the user can only select two cards at a time and that the chosen cards turn over to check for a match/close if a non-match:
![image](https://res.cloudinary.com/elerel/image/upload/v1612625655/opencards_w7vtma.png) 
![image](https://res.cloudinary.com/elerel/image/upload/v1612625691/closecard_fc1d7s.png)

- Ensure a Game Over modal appears when the user has run out of time and allows the user to replay the game or return home:
![image](https://res.cloudinary.com/elerel/image/upload/v1612625459/gameover_teth0s.png)

- Ensure that the player is redirected to the home page when the home button on the modals is selected

- Ensure a Congratulations modal appears when the user has won the game, displaying game results and an opportunity to replay the game:
![image](https://res.cloudinary.com/elerel/image/upload/v1612625776/replay_hopgro.png)

- Ensure that the flip counter is functional

---

## Device Testing

I wanted to make sure that the site was responsive across all devices and used [Browserstack](https://www.browserstack.com/) and [Browserling](https://www.browserling.com/) as handy tools to check this. In the early stages of the project, I used [AmIResponsiveDesign](http://ami.responsivedesign.is/) and [Responsinator](https://www.responsinator.com/) in addition to check compatibility across browsers and several different devices.

The devices used to check Take to the Skies are as follows:

    -   Android:    
        - Chrome on Google Nexus 9
        - Firefox on Google Pixel 4
        - Chrome on Samsung Galaxy S9
        - Firefox on Samsung Galaxy Tab S6
    On Developer Tools:
        - Galaxy S5, Moto G4, Galaxy Fold, Surface Duo, Pixel 2, Pixel 2 XL

    -   iOS:
        -     


---

incl Responsinator

HTML, CSS and JShint were all used to validate the code for this project. Both HTML and CSS results returned no warnings or issues. JShint 

## Online Validations

To make sure the code for my project passed without any errors or warnings, I used the following online validators:

-   [W3C HTML Validator:](https://validator.w3.org/)
![image](https://res.cloudinary.com/elerel/image/upload/v1612523002/htmlchecker_jwpmce.jpg)

-   [CSS Validator by Jigsaw:](https://jigsaw.w3.org/css-validator/)
![image](https://res.cloudinary.com/elerel/image/upload/v1612041034/CSS_validator_qqveko.png)

-   [JShint](https://jshint.com/)
![image](https://res.cloudinary.com/elerel/image/upload/v1612476597/jshintreport_qgqhu6.jpg)

-   [Google Mobile Friendly Test:](https://search.google.com/test/mobile-friendly)
![image](https://res.cloudinary.com/elerel/image/upload/v1612130347/Googlemobfrndtest_daqbni.jpg)

-   [LightHouse Report: Mobile Device](https://developers.google.com/web/tools/lighthouse)
![image](https://res.cloudinary.com/elerel/image/upload/v1612476695/lighthousescoremobile_wvbpnk.jpg)

-   [LightHouse Report: Desktop](https://developers.google.com/web/tools/lighthouse)
![image](https://res.cloudinary.com/elerel/image/upload/v1612476765/lighthousescoredesktop_v2d1eb.jpg)

- [Responsinator](https://www.responsinator.com/?url=https%3A%2F%2Felerel.github.io%2Fms2-letsfly%2F)
![image](https://res.cloudinary.com/elerel/image/upload/v1612623887/responsinator1_fpvw0t.png)

---

## Project Bugs and Solutions
Expected - Tested the site by doing this - Result(The site did not respond due to abc or the site acted as expected and did Y) - Fix (I did Z to the code because D etc)

Bugs that needed addressing:

## Remaining Bugs

---

## Testing User Stories

#### As a Site User:

-	I want a site that is easy to navigate through and to play a game that is fun and interactive
>   *The site provides a clean and non over-stimulating appearance offering the user a clear navigation on how to play the game. The game provides interactivity when the user clicks on each of the cards and they can chose to reply their game should they wish.*
-	To be able to change the level of the game (easy, medium hard)
>   *Unfortunately due to time contraints, I would have included levels in the game so that this could keep the user continuing to play the game. The game offers one standard level but the user can replay and beat their previous result.*
-	To be able to track my progress as I play
>   *Above the cards, the player can track their progress with the use of the countdown timer and how many flips or moves they have made.*
-	To be able to see my results post game and how long/how many moves it took to complete the game
>   *At the end of each game, the player is given the total time they took to complete the game and is awarded with a star rating based on the time they took to complete.*
-   To easily find a way to restart the game if I made too many mistakes
>   *The player can choose to restart the game at any time by clicking on the Take to the Skies logo or the restart button at the top left corner of the page.*
-   To easily recognise the airline logos and that they are all unique logos and not all look similar, i.e. colours
>   *Each of the logos were chosen individually because of their difference in colour and appearance, yet some have the recurring colour *red* so that is offers some challenge to the game.*
-	Easily navigate around the site, understand easily the rules of the game and return to the home page if needed
>   *The site was designed to have a simple appearance to not overload of confuse the player, simply to offer clear instructions (by clicking on the How to Play button on the home page) and they can also return to the home page by clicking the home button on the top left corner of the game page.*

### As a Site Developer:

As a site developer, I would like the site to accomplish:
-   Shuffle the cards on reload or start of game
>   *To make the site as simple as possible, I opted for the firstClick function instead of a separate button to display "start" so that the site's content was kept simple and clean. The instructions on the index page also informs the user that the game begins on their first click of the their chosen card.* 
-	Display the progress of the game to the user with a timer
>   *Instead of starting the clock at zero, I decided to make the game a little more challenging by providing instead a countdown timer of 60seconds/1 minute to complete the game.*
-	Use a star rating other than points to simplify the game
>   *Staying in the tune of keeping things simple, I opted for the star rating instead of points as this I found was a more simple scoring method and appropriate for younger players.*
-	A restart button to allow the user reset the game, timer and star rating
>   *This is provided in the top-left-hand corner of the page and the user can also click the title above the game also should they wish to restart.*
-	A well done/congratulations modal to appear when the player has completed the game
>   *As soon as the player has completed all matches, they are congratulated with a message informing them of their flips count and a star rating.*
-	A “game over” modal to appear to let the player know they ran out of time and to give the player the chance to replay the game
>   *The game over message appears as soon as the clock reaches zero and they have an option to restart the game or return to the home page.*

---

[Back to README](README.md)