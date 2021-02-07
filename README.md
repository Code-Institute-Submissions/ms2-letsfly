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
- [3.3 Version Control](#33-version-control)
- [3.4 Tools and Other Resources](#33-tools-and-other-resources)
- [3.4 Code Resources](#34-code-resources)

[**4. Testing**](#4-testing)

[**5. Bugs and Solutions**](#5-bugs-and-solutions)
- [5.1 Resolved Bugs](#51-resolved-bugs)
- [5.2 Existing Bugs](#52-existing-bugs)

[**6. Deployment**](#6-deployment)
- [6.1 Deploy to Github Pages](#61-deploy-to-github-pages)
- [6.2 Clone or Downloading](#62-cloning-or-forking)
- [6.3 To Fork the Project](#63-to-fork-the-project)

[**7. Credits**](#7-credits)
- [7.1 Content](#71-content)
- [7.2 Media](#72-media)
- [7.3 Code](#73-code)
- [7.4 Acknowledgements](#74-acknowledgements)

---

## 1. UX

### 1.1 Overview

As a young child (and to this day, I will admit), I used to love spotting the different airlines from the sky by their airline logos. I chose this project simply as there has never been a better time to switch off from the news around us lately and maybe even exercise our brains with this fun card- matching game. It is designed to be responsive on a wide range of devices and is a clean and simple site to navigate around for users of all ages to enjoy.
What is the challenge of the game? With one standard level, the aim is to match all pairs in the given timeframe of 1 minute, with as few clicks/flips as possible to earn the highest score of 3 stars. The more card flips the user plays, the lower stars they receive.

### 1.2 Project Goals

It was almost immediate that I decided to create a memory-card game for my second milestone project. By creating a fun and engaging game for the user, I wanted to create a challenging yet also fun exercise; the big drive in this project is to perform as much learning practise from Javascript as possible.

### 1.3 User Stories

As a site user:
-	I want a site that is easy to navigate through and to play a game that is fun and interactive
-	To be able to change the level of the game (easy, medium hard)
-	To be able to track my progress as I play
-	To be able to see my results post game and how long/how many moves it took to complete the game
-   To easily find a way to restart the game if I made too many mistakes
-   To easily recognise the airline logos and that they are all unique logos and not all look similar, i.e. colours
-	Easily navigate around the site, understand easily the rules of the game and return to the home page if needed

As a site developer, I would like the site to accomplish:
-   Shuffle the cards on reload or start of game
-	Display the progress of the game to the user with a timer
-	Use a star rating other than points to simplify the game
-	A restart button to allow the user reset the game, timer and star rating
-	A well done/congratulations modal to appear when the player has completed the game
-	A “game over” modal to appear to let the player know they ran out of time and to give the player the chance to replay the game

### 1.4 Design Process

#### Colour Scheme

-   Initially, I used the below colour chart to work from [Scheme Color](https://www.schemecolor.com/yellow-navy-blue-color-scheme.php) as I found it to be quite a striking and familiar colour chart (bold and very Ryanair) to work with.
-   For the game page, instead of using the background image, I decided to go with a radial-gradient of the two blue colours, rgb(79, 134, 224) and rgb(2, 42, 95).
-   I added in some extra colours, soft/warm earthy colours such as #e4dba6 and #d8a05c for the CTA buttons and are both different from each other to draw the attention of the user.

![image](https://res.cloudinary.com/elerel/image/upload/v1611741228/Colour_scheme_rlwmwu.png)


####   Images

The imagery chosen for my project was down to two things- colours and to be able to create the sense of flying and the excitement of travel. I like this image as it shows the user in the image the tip of the wing, which is usually where the airline logo would appear.

![image](https://res.cloudinary.com/elerel/image/upload/v1611746832/plane1_s7otzx.jpg)

####   Typography

I used Googlefonts to browse for suitable fonts to implement into the project and decided on **"Dancing Script"** for the title font as it appears as a neat and tidy font which reminds me of type of styled font you would see on 1950's aircrafts. It also works well with the hover bounce effect and creates an firendly, informal vibe to the site.

####   Wireframes

The interactive memory card game simply has two sections: a welcome page with an instructions button (once clicked, a pop-up modal with bullet-styled instructions appear) and a button that directs the user to the game itself.

- Wireframes for large screens and desktops: <a href= "assets/docs/wireframes/MS2-desktop.pdf" target="_blank"> Desktop View</a>
- Wireframes for medium screens and tablet devices: <a href= "assets/docs/wireframes/MS2-tablet.pdf" target="_blank"> Tablet View</a>
- Wireframes for smaller screens and mobiles: <a href= "assets/docs/wireframes/MS2-mobile.pdf" target="_blank"> Smartphone View</a>

---

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
   ![image](https://res.cloudinary.com/elerel/image/upload/v1612738412/gamepg_oh0feh.png)
   
   **Game Over Modal:**
   ![image](https://res.cloudinary.com/elerel/image/upload/v1612738326/gameovermodal_cyraq2.png)

   **Congratulations Modal:**
   ![image](https://res.cloudinary.com/elerel/image/upload/v1612738271/congratsmodal_qjvjaz.png)


### 2.2 Features Left to Implement

-   Unfortunately as time did not allow, I would have definitely included **difficulty levels** ("Easy", "Medium" & "Hard" etc), with each level adding in more airline logos to match and less time as they progress
-   The game could be made more interesting if there were a facility to **track your score** and/or even present a leaderboard where one could submit their names and scores.
-   Was very close to but again timing as an issue, **sounds effects** as an addition I think would have enhanced UX and overall enjoyment of the game with a game.
-   To add further to the site, I would have also included a short **quiz** below the memory card game for bonus points perhaps, asking the player if they can recognize the logos and match them to the name of their associated airline. 

---

## 3. Technologies Used

### 3.1 Languages

-   [HTML](https://en.wikipedia.org/wiki/HTML)
-   [CSS](https://en.wikipedia.org/wiki/CSS)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### 3.2 Libraries:

-   [JQuery](https://jquery.com/) used to make the site interactive
-   [Bootstrap](https://getbootstrap.com/) used to help make the game responsive across all devices
-   [Googlefonts](https://fonts.google.com/) used to source the font for the title of the game on both pages
-   [Balsamiq](https://balsamiq.com/) used to create the wireframes during the "skeleton" phase of the project.
-   [Font Awesome](https://fontawesome.com/) used frequently to provide icons for the modals and game page.

### 3.3 Version control

-   [Git](https://git-scm.com/) used as the version control in utilising [Gitpod](https://www.gitpod.io/) to add code and commit to Git/push to Github.
-   [Github](https://github.com/) used to store the code following being pushed from Git.  

### 3.4 Tools and Other Resources:

-   [AmIResponsive](http://ami.responsivedesign.is/) to check if the site is responsive across various devices
-   [Autoprefixer CSS](https://autoprefixer.github.io/) used to check CSS browser compatibility.
-   [Browserstack](https://www.browserstack.com/) used to check the responsiveness of project across a range of devices and browsers
-   [Cloudinary](https://cloudinary.com/) used to store images for the project.
-   [CSS](https://css-tricks.com/)- handy guide used for css tips/questions
-   [Hover:CSS](https://ianlunn.github.io/Hover/) used to create additional CSS effects for the title page and buttons across the site
-   [Youtube](https://www.youtube.com/) used as a very handy reference for online JS tutorials and refreshers on JS code learned from the course
-   [Real Favicon Generator](https://realfavicongenerator.net/)- to create the sites favicon
-   [W3 Schools](https://www.w3schools.com/) used as a general reference guide for CSS tips and Javascript function queries.
-   [Beautifier](https://beautifier.io/) used to beautify all code for the project.
-   [Stack Overflow](https://stackoverflow.com/) as a reference for several tips on ...
-   [Markdown CheatSheet](https://www.markdownguide.org/cheat-sheet/) guide for refreshing memory on markdown use
-   [MobiReady](https://ready.mobi/) used to check if the site is mobile responsive
-   [Responsinator](https://www.responsinator.com/?url=https%3A%2F%2Felerel.github.io%2Fms2-letsfly%2F) used to check how the responsive the design of the project was across different devices.
-   [Unused-CSS](https://unused-css.com/)- a helpful tool to check for any unused CSS

### 3.4 Code Resources: 
- [Tania Rascia's Tutorial](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/) on how to build a Memory Card Game with Javascript
- [What-the-JS](https://www.ci-resources.online/js.html) by Jim Morel
- Scotch.io's web tutorial on how to build a memory card game [Sandra Israel-Ovirih's](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-process-flow)
- [Marina Ferreira's tutorial](https://www.youtube.com/watch?v=ZniVgo8U7ek&feature=emb_logo) on how to build a memory card game

##### Back to [Contents](#table-of-contents)

---

## 4. Testing

A full testing report can be found in the [Testing Section](TESTING.md)

---

## 6. Deployment

### 6.1 Deploy to GitHub Pages

The site was deployed to GitHub pages using these steps below:
1. All code for this project was created in Gitpod, a local IDE (Integrated Development Environment)
2. The code was pushed to Github stored in a [repository](https://github.com/elerel/ms2-letsfly)
3. Once in the repository, I selected "Settings" and scrolled down to the Github pages section.
4. Under "Source" in the drop down, "Master-Branch" was selected.
5. Following this, the site was then published to GitHub Pages and the site URL was displayed.

### 6.2 Cloning or Downloading

-   The code can be run locally by cloning or downloading. 
-   This is done by clicking on the green "code" button and from here, you can then select either clone or download. 
-   You can choose to clone using HTTPS, SSH, or GitHub CLI, then click the copy button to the right.
-   If you choose the Download ZIP option, a link to download the ZIP file is provided which can be unzipped on the local machine.

### 6.3 To Fork the Project:

If you would like to contribute to this project or have anything to add, you may fork the project using the following steps:
-   Log on to [Github](https://github.com/) or create account and locate the Github repository.
-   Open the [repository](https://github.com/elerel/ms2-letsfly)
-   On the top right-hand of the page, click "Fork"
-   You will now have a copy of your own of the repository in your own Github account.

##### Back to [Contents](#table-of-contents)

---

## 7. Credits

### 7.1 Content

All content is written by the developer, Eleanor Erel.

### 7.2 Media

-   The homepage image was downloaded free from [Pexels](https://www.pexels.com/search/airplane/)
-   The airline logos (of which each belong to their respective airline, as this project is for educational purposes only) were downloaded from Cal Stevens' Github Repository [Calda/Airline Logos](https://github.com/calda/Airline-Logos)

### 7.3 Code

-   As commented in [main.js](https://github.com/elerel/ms2-letsfly/blob/master/assets/js/main.js), the bulk of the code written in Javascript is mainly from Tania Rascia's tutorial on building a memory card game. I used this tutorial as the primary base for code snippets, as well as the tutorial from Sandra Israel-Ovirih's [Memory Card Game](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)
-   Scotch.io [tutorial](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-4-star-rating) on how to display a star rating for the game 
-   [Stackoverflow](https://stackoverflow.com/questions/46458740/starting-timer-when-clicking-first-card-of-memory-game) on how to begin timer on first card click of the game
-   Bootstrap: [Modals](https://getbootstrap.com/docs/4.0/components/modal/) code snippets from Bootstrap Modals for use of modals in both index page and game page

### 7.4 Acknowledgements

For this project, my sincere thanks goes out to:
- My mentor, **Nishant Kumar** for his relentless support and guidance given throughout this time.
- The Slack Community, and Jim Morel for his very useful site "What the JS" which was incredibly helpful
- Code Institute Student Care for their guidance in the past few weeks
- My husband for his support and patience, and a little shout-out to my little girl, encouraging me that my game was not boring and not to give up!

##### Back to [Contents](#table-of-contents)