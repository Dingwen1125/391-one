[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ttBdBlyV)
# HW2: HTML, CSS, JS

## Homework Assignment: Spark! Bytes Website Development

__Objective__: Develop a marketing website for Spark! Bytes, an application that
notifies users about leftover food availability. This assignment will deepen
your understanding of frontend web development concepts, including HTML, CSS,
and basic JavaScript.

See the two images in `/examples` for what the final website should look like.

Here is a link to some annotated images that should help you identify where to
use certain CSS classes. The red boxes and red text are the annotations:

* [Home Page](images/home.png)
* [About Page](images/about.png)

__Background__: For this assignment you will work on a basic HTML, CSS and JS
website. Some code is provided for you already and other code you will need to
write. We’re using “pure” HTML, CSS, and JS in our assignment. You should not
install any libraries etc.

In the home page, we have given you the code required to attach the styles.css
and scripts.js files (both provided) to your website. Take a look at how it’s
done in the first lines of the home.html file but, you are not required to
modify this, nor should you need to.

To view your website, just open the HTML file(s) in your browser of choice. If
you haven’t done this before, look for File | Open or ctrl-o / cmd-o and
navigate to the file. You may also be able to just double click on the file.

## High Level Overview:

You will take the provided code, update the home page to look like the provided
picture. You will then need to create an about page and link it to the home
page. Finally, you will need to add the interactive elements using javascript.

## Detailed Tasks:

These are listed in order but you don’t need to complete them in this order –
although it’s generally encouraged.

1. Update the `home.html` to have all the content as shown in the image and
   provided in the content below.
1. Attach the CSS styles to everything you just added in the `home.html` page.
   1. Add CSS to control the size of the logos for each button. Each logo should
      be a 20px square.
   1. Update the CSS as required so that when you hover over the Android and iOS
      buttons the background color of the button changes from black to green.
   1. Update the CSS as required so that the background color change of the two
      buttons has a transition effect. Choose any effect you like.
1. Add the content to the about page.
   1. About YOU, not what we have written
   1. A nav bar just like the home page
   1. a footer like the home page
   1. A photo (of you, an pet, anything really that is personal)
   1. Style it by attaching the styles from the `styles.css` file
   1. Figure out how to update the CSS so that there is a green border around
      the “author image” (the pic you used) on the page
1. Link the home page to the about page and vice versa
1. __This begins part two__
1. Make it fancy with Javascript
   1. Attach the `handleJoinClick()` in `scripts.js` to the iOS and Android buttons
   1. Perform the required modifications to the scripts/functions so that
      whatever email the user enters in the alert dialog is added to the “Users
      Who’ve Signed Up” list.
   1. Add the JS required so that when someone enters an email in the input
      field under the “Signup for Notifications” title it also adds their email to
      the list.
1. You might have noticed that `home.html` is not a the same name as we spoke
   about in lecture for the “home” or “root” of your website. Use the lecture
   slides, google etc to figure out what the standard name is and rename `home.html`
   to that name. Don’t forget to update the link in the about page too.

## Required Text Content:

Provided for easy copy pasting

- __Header__: “Spark! Bytes - Leftover Food Notifications for BU’s Campus”
- __Welcome Section Part 1__: "Spark! Bytes is a revolutionary platform for
  Boston University’s community. After events, any leftover food can be posted
  here, and those interested can sign up to grab some delicious free food.
- __Welcome Section Part 2__: Our unique feature allows users to filter out food
  based on allergens, types and more. Stay up-to-date through SMS and text
  notifications whenever free food is available nearby!
- __About Page__:
  - “About Spark! Bytes” as the title.
    - Content: Spark! Bytes was conceived with a simple idea in mind - to
      minimize food waste and maximize food sharing within the Boston University
      community. We recognized the potential of connecting those who have excess
      food with those who could benefit from it.
  - About the Author: In your own words, tell us a bit about yourself.


## Git + GitHub Requirements

This assignment is available via Github Classroom, and thus we can test your git
skills.

The requirements are fairly easy to meet:

- Use commits to incrementally build up a solution. Typically, we do one commit
  per “feature.” In this case, one feature might be the HTML layout, another could
  be integrating the CSS, and a final could be adding the JS.
- All commit titles and messages should be meaningful. No to “fix” and yes to
  “fix: debugged js script fetch call.”

__Remember__: push your commits to your fork as soon as possible so you don’t lose your work!

## Submission Guidelines:

- Upload all your files to Gradescope (don’t forget images)
- We’ll go check out your repository later.
