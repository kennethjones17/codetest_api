This is a basic StarWars API Access Functionality.

This is currently hosted on Firebase for easy of accessibility - https://swapicode.web.app/

To run this, - download the zip, extract it and run  1. `npm i` to install node_depedencies(here theres only nodemon, which is not mandatory) and 2.`npm start` on the root directory.

To run it locally - You need style.css,app.js,package.json,


Additional possible Implementation:

1. Incase there were multiple situtations where data would be updated on a regular basis, we could use a taskrunner like gulp to run our build and dev scripts.
2. In a dynamic situation, it would be recommended to implement a CI/CD pipeline
3. Storing the data-connecting it to a db and displaying data to make additions so that user can have favourites and then provide opportunity to download them.

Idea

1. This is a basic static web page to show the chararcters and their details associated with them. I created a separate button to display their vehicles to make it easier for the user to know what that button is for.
2. Implement using Vanilla js, hosted on python's built-in http.server module
3. For ease of view, deployed on firebase
4. Reason to choose vanilla JS - I thought I could implement a complete end-to-end Wev App with a db and then deploy ci/cd

Technologies that could be used - [Mongo(DB),CircleCI(CI/CD),React(Front-end)]
