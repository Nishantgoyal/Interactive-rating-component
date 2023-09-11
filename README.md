# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Interactive Rating System](./ScreenShot/interactive_rating_component.png)

### Links

- Solution URL: [Interactive rating component Solution](https://github.com/Nishantgoyal/Interactive-rating-component)
- Live Site URL: [Interactive rating component LiveSite](https://nishantgoyal.github.io/Interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- Hiding/Unhiding Elements
- Communicating data between JavaScript and HTML
- Hover States and PseudoClasses
  ```css
  .rating_input:hover {
      background-color: var(--orange);
      color: var(--white);
  }
  ```
- Adding Event Listeners
  ```js
  document.getElementById("rating_form").addEventListener("submit", (event) => {
    // ... Code ...
  });
  ```

## Author

- Frontend Mentor - [@Nishantgoyal](https://www.frontendmentor.io/profile/Nishantgoyal)
- Twitter - [@Nishant90150105](https://twitter.com/Nishant90150105)
