# <p align="center">Testing Report - Take to the Skies Memory Card Game</p>

## [Contents:](#contents)

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

- Ensure that the player is redirected to the home page when the home button on the modals is selected: no issues here, like the in above images the player is taken back to the home page when clicked.

- Ensure a Congratulations modal appears when the user has won the game, displaying game results and an opportunity to replay the game:
![image](https://res.cloudinary.com/elerel/image/upload/v1612738271/congratsmodal_qjvjaz.png)

- Ensure that the flip counter is functional: the flip counter increases by one with each card turned over

---

## Device Testing

I wanted to make sure that the site was responsive as much as possible across all devices and used [Browserstack](https://www.browserstack.com/) and [Browserling](https://www.browserling.com/) as handy tools to check this. In the early stages of the project, I used [AmIResponsiveDesign](http://ami.responsivedesign.is/) and [Responsinator](https://www.responsinator.com/) in addition to check compatibility across browsers and several different devices.

The site was tested across: **Chrome, Internet Explorer, Safari, Firefox, UC Browser, Opera and Samsung Internet.**

The devices used to check Take to the Skies, thanks to friends and family are as follows:

####  Android:    

-  Chrome on Google Nexus 9
-  Firefox on Google Pixel 4
-  Huawei MediaPad T3
-  Chrome on Samsung Galaxy S9
-  Firefox on Samsung Galaxy Tab S6
-  Chrome & Samsung Internet on Samsung A50 & Samsung A40

 **On Chrome Developer Tools:**
 Galaxy S5, Moto G4, Galaxy Fold, Surface Duo, Pixel 2, Pixel 2 XL

####   iOS:

-   Iphone 12, Mini (12), 11 (Pro Max), Iphone 8 Plus, Iphone XS, Iphone XE (tested both on Chrome and Safari)
-   IPad Pro 12.9 2020, IPad 7th, IPad Mini (2017)


---

## Online Validations

To make sure the code for my project passed without any errors or warnings, I used the following online validators:

-   [W3C HTML Validator:](https://validator.w3.org/)
![image](https://res.cloudinary.com/elerel/image/upload/v1612523002/htmlchecker_jwpmce.jpg)

-   [CSS Validator by Jigsaw:](https://jigsaw.w3.org/css-validator/)
![image](https://res.cloudinary.com/elerel/image/upload/v1612041034/CSS_validator_qqveko.png)

-   [JShint](https://jshint.com/)

The only issues that showed in the JShint report were the use of 'let', 'const' 'arrow-function' and template literals use which is only available in ES6, causing no major concern. In addition, there were a few missing semi-colons in the code which I later added.

![image](https://res.cloudinary.com/elerel/image/upload/v1612476597/jshintreport_qgqhu6.jpg)

-   [Google Mobile Friendly Test:](https://search.google.com/test/mobile-friendly)
![image](https://res.cloudinary.com/elerel/image/upload/v1612130347/Googlemobfrndtest_daqbni.jpg)

-   [LightHouse Report: Mobile Device](https://developers.google.com/web/tools/lighthouse)
![image](https://res.cloudinary.com/elerel/image/upload/v1612476695/lighthousescoremobile_wvbpnk.jpg)

-   [LightHouse Report: Desktop](https://developers.google.com/web/tools/lighthouse)
![image](https://res.cloudinary.com/elerel/image/upload/v1612476765/lighthousescoredesktop_v2d1eb.jpg)


To further improve the Lighthouse performance score, I removed some unused CSS as advised, added a META description for the site which improved the SEO scoring and changed the font colours of the footer to improve accessibility:

- Mobile Lighthouse Report:
![image](https://res.cloudinary.com/elerel/image/upload/v1612711547/mobilelighthouse_s9zpyw.png)

- Desktop Lighthouse Improved Report:
![image](https://res.cloudinary.com/elerel/image/upload/v1612711694/desktoplighthouse_rwsqlt.png)

---

- [AmIResponsiveDesign](http://ami.responsivedesign.is/#)

![image](https://res.cloudinary.com/elerel/image/upload/v1612710915/amiresponsive_dhtf1w.png)

- [Responsinator:](https://www.responsinator.com/?url=https%3A%2F%2Felerel.github.io%2Fms2-letsfly%2F)

All appeared as normal in Responsinator, apart from the game grid pushing down to the footer on wide angle across devices from approx 667px width:
![image](https://res.cloudinary.com/elerel/image/upload/v1612735971/gridbottom2_fviruf.png)

This was later resolved (as explained in bugs section below) and now appears as it should.



---

## Project Bugs and Solutions

-  **The time remaining on the modal:**
When the player wins the game and the modal displaying the time thy had left no the clock, it seems to show a difference of one second apart (from what is showing above the modal in the score panel):
![image](https://res.cloudinary.com/elerel/image/upload/v1612709041/timingbug_sfoi3e.png)

To fix this, I tried adding "+1" in the winModal function and it gave the required response:
![image](https://res.cloudinary.com/elerel/image/upload/v1612709073/timingbugfix_ub93ja.png)

- **IPad Pro bug (found across several iOS devices):**
The "how to play" and "start" buttons were not displaying the same as I had originally intended- the start button was displaying a different colour and had a lot more border radius to it:
![image](https://res.cloudinary.com/elerel/image/upload/v1612711817/ipadprobug_rhiwfm.png)

To resolve this issue, instad of having the two buttons wrapped inside one div, I separated both buttons into their own "div" and added an auto-prefixer in CSS which managed to fix the layout.

- **Title Game Page display/alignent:**
For consistency purposes, I wanted to add the hover-wobble effect to the title game-page but it did not seem to centre itself on the page, even when text-center was added (via Bootstrap) and centre align in CSS:
![image](https://res.cloudinary.com/elerel/image/upload/v1612713733/titlegamepg_lzjz1g.png)

Instead of having the wobble-effect, I decided to keep the title-gamepage as is and keep it as a link so if clicked, the game would restart.

- **Grid pushed to the bottom/on to the footer of the Game Page:**
On smaller devices, such as iPhones 6,7 & 8 the grid of the game was appearing a lot lower than desired:
![image](https://res.cloudinary.com/elerel/image/upload/v1612734997/gridbottom_usjomf.png)
![image](https://res.cloudinary.com/elerel/image/upload/v1612735971/gridbottom2_fviruf.png)

To resolve this, I added a margin-bottom to the game id and a media query on smaller devices which proved a much better look.

---

## Remaining Bugs

-   One of the few bugs I was unable to address when tested in Internet Explorer was that the card or game grid would not display and the score panel was left-aligned instead of center-aligned:
![image](https://res.cloudinary.com/elerel/image/upload/v1612709795/IEexplorerbug_hsk8fb.png)

This didn't cause too much worry, as IE is somewhat of an ageing browser and is no longer further developed by Microsoft, most users would have now moved on to Edge or an alternative browser. I tested the site on the latter and it displayed without any issues.

-   One little stump I came across was how to remove the dark border over the "How to Play" button once clicked. The user can click anywhere on the page, or the close button to leave the instruction modal but the button's border then is much darker as per below:
![image](https://res.cloudinary.com/elerel/image/upload/v1612730419/how2playmodal_ei4qm8.png)

Having checked W3 Schools and StackOverFlow for answers to try and solve, I added outline:none to the how2play button in my CSS which proved unsuccessful. Luckily it does not alter the button terribly, but to improve UX I would have had this fixed if I could.

Another remaining bug, subtle but will be noticed is the second "1" failing to show on the countdown timer- it goes from 2 seconds to zero and unfortunately I did not know how to go about solving this.

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