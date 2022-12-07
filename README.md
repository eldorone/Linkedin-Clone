## Mobile responsive Linkedin Clone website built with: 
 - React JS 
 - Redux 
 - Firebase
 - Styled-Components

## Check-out the website demo: [Linkedin Clone]()

## Sign in Page Layout:

![Linkedin Clone](https://user-images.githubusercontent.com/37968028/206279128-00efca08-6efc-4cbe-a538-fc5b00f9d253.png)

## Home Page Layout:

![Linkedin Clone](https://user-images.githubusercontent.com/37968028/206280272-51931d18-ee99-4dfc-b1d2-38ce7ba0ebbb.png)

## Post Page Layout:

![Linkedin Clone](https://user-images.githubusercontent.com/37968028/206280574-222e3f11-383a-4375-bab0-c72952399c0b.png)

 <br />

## Added some features apart from the tutorial on my own like:

-   Post like functionality
-   Mobile responsiveness

## Features and Fuctionality

-   Login using Google (Firebase Authentication)
-   Create a new post
-   Share photos and videos (React player for videos)
-   Like posts
-   Realtime update likes and posts
-   Auto authenticate user on refresh
-   Sign Out

## How to build your own..?

1. Clone this repo
1. Install all the dependencies
    ```bash
    npm i
    ```
1. Setup Firebase

    - Create Firebase account
    - Create a new project
    - Create a web app for that
    - Copy your config from there

        - Select config option
        - Paste those config inside firebase/config.js file

    - Setup authentication using Google

1. Tweak code as you like
1. Let's build the optimized version

    ```bash
    npm run build
    ```

1. **Now for hosting on Firebase lets config Firebase locally**

    - Install Firebase CLI
    - Login to Firebase

        ```bash
        firebase login
        ```

    - Initialize Firebase

        ```bash
        firebase init
        ```

    - Select hosting in the menu
    - Select your respective project from the list
    - Select 'build' as your hosting directory and other options as you want
    - Let's deploy our clone and make it live

        ```bash
        firebase deploy
        ```

### That's it our clone is up and running! Have fun!
