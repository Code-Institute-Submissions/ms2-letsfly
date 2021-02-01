# MS2 - Interactive Front End Milestone Project "Take to the Skies"
![Image](https://res.cloudinary.com/elerel/image/upload/v1612171587/amiresponsivems2_ln20wa.jpg)

### View the live project [here.](https://elerel.github.io/ms2-letsfly/)

---

## [**Table of Contents**](#table-of-contents)

[**1. UX**](#1-ux)
- [1.1 Overview](#11-overview)
- [1.2 Project Goals](#12-project-goals)
- [1.3 User Stories](#13-user-stories)
- [1.4 Design Process](#14-design-process)
    * [Colour Scheme](#colour-scheme)
    * [Images](#images)
    * [Typography](#typography)
    * [Wireframes](#wireframes)

[**2. Features**](#2-features)
- [2.1 Existing Features](#21-existing-features)
- [2.2 Features Left to Implement](#22-future-features)

[**3. Technologies Used**](#3-technologies-used)
- [3.1 Languages](#31-languages)
- [3.2 Libraries](#32-libraries)
- [3.3 Tools](#33-tools)
- [3.4 Resources](#34-resources)

[**4. Testing**](#4-testing)
- [4.1 Testing](#41-testing)
- [4.2 Testing User Stories](#42-testing-user-stories)

[**5. Bugs and Solutions**](#5-bugs-and-solutions)
- [5.1 Resolved Bugs](#51-resolved-bugs)
- [5.2 Existing Bugs](#52-existing-bugs)

[**6. Deployment**](#6-deployment)
- [6.1 GitHub Pages](#61-github-pages)

[**7. Credits**](#7-credits)
- [7.1 Content](#71-content)
- [7.2 Media](#72-media)
- [7.3 Code](#73-code)
- [7.4 Acknowledgements](#74-acknowledgements)

---

## 1. UX

### 1.1 Overview

As a young child (and to this day, I will admit), I used to love spotting the different airlines from the sky by their airline logos. It used to keep us quite entertained as children, so why not turn it into a memory card matching game? I chose this project simply as there has never been a better time to switch off from the news around us lately and maybe even exercise our brains with this fun card- matching game. It is designed to be responsive on a wide range of devices and is a clean and simple site to navigate around for users of all ages to enjoy.

### 1.2 Project Goals

It was almost immediate that I decided to create a memory-card game for my second milestone project. By creating a fun and engaging game for the user, I wanted to create a challenging yet also fun exercise; the big drive in this project is to take as much learning experience from Javascript as much as possible.

What is the challenge of the game?

To match as many pairs in as little time as possible and the player is rewarded points for every match they find- bonus points for every second remaining.

### 1.3 User Stories

As a site user:
-	I want a site that is easy to navigate through and to play a game that is fun and interactive
-	To be able to change the level of the game (easy, medium hard)
-	To be able to track my progress as I play
-	To be able to see my results post game or see how I fare against other players
-	Easily navigate around the site, understand easily the rules of the game and return to the home page if needed

As a site developer, I would like the site to accomplish:
-   Shuffle the cards on reload or start of game
-	Display the progress of the game to the user with a timer
-	Use a star rating other than points to simplify the game
-	A restart button to allow the user reset the game, timer and star rating
-	A well done/congratulations modal to appear when the player has completed the game
-	A “game over” modal to appear to let the player know they ran out of time and to give the player the chance to replay the game

### 1.4 Design Process

Colour Scheme

-   I used the below colour chart from [Scheme Color](https://www.schemecolor.com/yellow-navy-blue-color-scheme.php) as I found it to be quite a striking and familiar colour chart (Ryanair?) to work with.
-   For the game page, instead of using the background image, I decided to go with a radial-gradient of the two blue colours, rgb(79, 134, 224) and rgb(2, 42, 95).

![image](https://res.cloudinary.com/elerel/image/upload/v1611741228/Colour_scheme_rlwmwu.png)


*   Images

The imagery chosen for my project was down to two things- colours and to be able to create the sense of flying and the excitement of travel. I like this image as it shows the user in the image the tip of the wing, which is usually where the airline logo would appear.

![image](https://res.cloudinary.com/elerel/image/upload/v1611746832/plane1_s7otzx.jpg)

*   Typography

I used Googlefonts to browse for suitable fonts to implement into the project and decided on "Dancing Script" for the title font as it appears as a neat and tidy font which reminds me of type of styled font you would see on 1950's aircrafts. It also works well with the hover bounce effect and creates an firendly, informal vibe to the site.

*   Wireframes

The interactive memory card game simply has two sections: a welcome page with an instructions button (once clicked, a pop-up modal with bullet-styled instructions appear) and a button that directs the user to the game itself.

- Wireframes for large screens and desktops: <a href= "assets/docs/wireframes/MS2-desktop.pdf" target="_blank"> Desktop View</a>
- Wireframes for medium screens and tablet devices: <a href= "assets/docs/wireframes/MS2-tablet.pdf" target="_blank"> Tablet View</a>
- Wireframes for smaller screens and mobiles: <a href= "assets/docs/wireframes/MS2-mobile.pdf" target="_blank"> Smartphone View</a>

## 2. Features

### 2.1 Existing Features

For this project, I decided to split the site into **two** sections, a home page and a game page. 

- Home Page
    - Upon entering the site, you are presented with the title of the game, Take to the Skies, with a large blue sky background image- one where you could easily find yourself gazing out of from an airplane window. There are two buttons centred on the page below a short description of the game and what it entails. For the main title, I used a hover-wobble effect (to remind the user of turbulence perhaps!) and as the player would hover over the buttons, there is a bounce-in hover effect to invite the user in.
    - The player can take a look at how to play before proceeding on with the game by clicking the button below, or they can be redirected from the instructions modal by clicking "Start Game" as per below:
    ![image](https://res.cloudinary.com/elerel/image/upload/v1611957390/howtoplaymodal_gwqilx.png)

- Game Page
    - The player begins the game by clicking on the first card they choose, as outlined in the instructions. Once they click, the counter (1 minute) begins. 
    - The object of the game is to match as many cards in as little time as possiblle. The score button above the game grid keeps track of how they progress as they go on in the game.
    - Should the player wish to restart, they can simply click on the "reset" button in the top-right hand corner, or should they wish to review the instructions, they can also return to the home page. The user can also click on the game title of this page to restart their game.
    - Once the game is complete, the player will be met with a game-over modal message letting them know they ran out of time and the choice to restart the game or return to the home page **OR** they will be congratulated on their results of the game should they complete/find all pairs of the cards, detailing their results of the game in the modal content.
    ![image](https://res.cloudinary.com/elerel/image/upload/v1612109218/gamepage_jujobz.png)
    ![image](https://res.cloudinary.com/elerel/image/upload/v1612109359/gameovermodal_avmdem.png)

### 2.2 Features Left to Implement

Had I more time to develop this game further, I would have definitely included **difficulty levels** ("Easy", "Medium" & "Hard" etc), with each level adding in more airline logos to match and less time as they progress, to make the game less of a play-once type of game and keep the player entertained longer. The game could be made more interesting if there were a facility to **track your score** and/or even present a leaderboard where one could submit their names and scores.
To add further to the site itself, I would have also included a short **quiz** below the memory card game for bonus points perhaps, asking the player if they can recognize the logos and match them to the name of their associated airline. 

## 3. Technologies Used

### 3.1 Languages

-   [HTML](https://en.wikipedia.org/wiki/HTML)
-   [CSS](https://en.wikipedia.org/wiki/CSS)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### 3.2 Libraries:

[JQuery](https://jquery.com/) used to make the site interactive
[Bootstrap](https://getbootstrap.com/) used to help make the game responsive across all devices

### 3.3 Tools:

[Googlefonts](https://fonts.google.com/) used to source the font for the title of the game on both pages
[Git](https://git-scm.com/) used as the version control in utilising [Gitpod](https://www.gitpod.io/) to add code and commit to Git/push to Github.
[Github](https://github.com/) used to store the code following being pushed from Git.
[Balsamiq](https://balsamiq.com/) used to create the wireframes during the "skeleton" phase of the project.
[Autoprefixer CSS](https://autoprefixer.github.io/) used to check CSS browser compatibility.
[Hover:CSS](https://ianlunn.github.io/Hover/) used to create additional CSS effects for the title page and buttons across the site
[Youtube](https://www.youtube.com/) Used as a very handy reference for online JS tutorials and refreshers on JS code learned from the course
[Real Favicon Generator](https://realfavicongenerator.net/)- to create the sites favicon
[W3 Schools](https://www.w3schools.com/) used as a general reference guide for CSS tips and Javascript function queries.
[Beautifier](https://beautifier.io/) used to beautify all code for the project.
[Stack Overflow](https://stackoverflow.com/) as a reference for several tips on ...
[Cloudinary](https://cloudinary.com/) used to store images for the project.
[Browserstack](https://www.browserstack.com/) used to check the responsiveness of project across a range of devices and browsers
[MobiReady](https://ready.mobi/) used to check if the site is mobile responsive
[Responsinator](https://www.responsinator.com/?url=https%3A%2F%2Felerel.github.io%2Fms2-letsfly%2F) used to check how the responsive the design of the project was across different devices.

### 3.4 Resources: 
- Tania Rascia's [Tutorial](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/) on how to build a Memory Card Game with Javascript
- [What-the-JS](https://www.ci-resources.online/js.html) by Jim Morel
- Scotch.io's web tutorial on how to build a memory card game [Sandra Israel-Ovirih's](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-process-flow)
- Marina Ferreira's [tutorial](https://www.youtube.com/watch?v=ZniVgo8U7ek&feature=emb_logo) on how to build a memory card game


## 4. Testing

### 4.1 

To make sure my HTML passed without any errors or warnings, I used [W3C HTML Validator](https://validator.w3.org/)
![image](https://res.cloudinary.com/elerel/image/upload/v1612041026/html_ok_ln02va.png)

CSS Validator by Jigsaw:
![image](https://res.cloudinary.com/elerel/image/upload/v1612041034/CSS_validator_qqveko.png)

Google Mobile Friendly Test:
![image](https://res.cloudinary.com/elerel/image/upload/v1612130347/Googlemobfrndtest_daqbni.jpg)



