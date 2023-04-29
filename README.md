# Netflix ( React-dom )

> A responsive and dynamic Netflix web app built with React, Firebase & SCSS.
> Live demo [_here_](https://netflix-atrp87.vercel.app/).
>
> This project is ongoing, features and placeholder items will changed or expanded on.

> Login Details:
> 
> email: andrew@admin.dev
> 
> password: 123456

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Lessons Learned](#lessons-learned)
- [MVP](#mvp)
- [Additional Features](#additional-features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

- I decided to build a clone of Netflix as it gave me a UI design I could visualise and build out with my own working code.
- I used minimal libraries to get a stronger understanding of React before looking into reacts large ecosystem of libraries.
- I used firebase for its minimal setup and easy access to data and auth, allowing me to get more confident working end to end using react. This was a breif overview of firebase for me as I was only using the docs. I will be expanding on my firebase knowledge using other resources and returning to apply what i've learnt.
- This project gave me more exposure to different hooks ( useEffect, useContext, useReducer ) and custom hooks ( useFetch )
- I hit my MVP so I decided to deploy the project, I will continue to work on it as there is plenty of features I will and want to add ( media carosel, media queries ) and testing ( Jest ).
I will build and learn outside the scope of this project and implement the newer features once I’ve spent time learning them.


## Technologies Used

- [React](https://reactjs.org/) - version 17.0.2
- [Firebase](https://firebase.google.com/) - version 9
- [React](https://reactrouterdotcom.fly.dev/docs/en/v6) - version 17.0.2
- [Axios](https://www.npmjs.com/package/axios) - version 0.27.2
- [Scss](https://sass-lang.com/) - version 1.49.9

## Lessons Learned

- Custom hooks ( useFetch ) extracting fetch logic needed to fetch the data and passing a url variable to the useFetch hook, allowing multiple components to fetch data using the same logic.
- useEffect: Data fetching, updating the DOM and timers. Understanding the dependancy array, if the array is absent, empty or it's dependant on a variable state change.
- useContext: Creating context for authenticated users sharing the current auth users unique id from firebase auth, allowing me to share the unique id values to multiple components ( login, signout, Favorites ) aswell as using a custom useCollection hook in tandem with auth context to update, delete and read documents from the firebase collection corresponding to the users unique id.
- Getting comfortable with functional components just being functions. At the beggining of this project I lacked foresight when building out my components. An example of this would be inputs, I have multiple forms using different inputs where I could have created a reusable input component and passed props for each input type.
- Typography, planning, time management and time contsraints


## MVP

- The app should resemble Netflix UI design
- The app should allow the user to login / create a profile ( email )
- The user should be able to add and remove liked movies
- The app should display the users favorite specific to the user logged in.

## Additional Features

- Impliment testing ( Jest )
- The user can query the API by meida name or genre
- The user can edit account and avatar
- The user can select and playback a video file
- Implement a media carousel ( Currently fetching / displaying 6 movies on each row )

## Screenshots

#### Home Page

![Netflix home gif](nf_home.gif)

#### Browse Page

![Netflix browse gif](nf_browse.gif)

#### Featured Film

![featured page image](nf_featured.png)

## Setup

```
npm install
```

```
npm start
```

Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser.

## Project Status

Project is: _In Development_

## Acknowledgements

- This project was based on [Netflix](https://www.netflix.com/gb/).
- The project API used [TMDB](https://www.themoviedb.org/).

## Contact

Created by [drewpeattie@hotmail.com](mailto:drewpeattie@hotmail.com) - feel free to contact me!
