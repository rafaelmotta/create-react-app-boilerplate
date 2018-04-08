## Name of the Project
This project was bootstrapped using the awesome package [https://github.com/facebook/create-react-app](create-react-app).

## Table of Contents

- [About](#about)
- [Packages used](#packages-used)
- [Requeriments to run](#requeriments-to-run)
- [Available Scripts](#available-scripts)
  - [npm](#npm)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm coverage](#npm-test)
  - [npm lint](#npm-lint)
  - [npm prettier](#npm-lint)
  - [npm run build](#npm-run-build)
- [Architecture](#architecture)
- [Running on heroku](#running-on-heroku)

## About
Insert the description of the project here

## Packages used

Others libraries:
- [Axios](https://github.com/axios/axios) - Make HTTP requests
- [Bootstrap](https://github.com/twbs/bootstrap) - HTML / CSS framework
- [Font awesome](https://github.com/FortAwesome/Font-Awesome) - SVG Icons
- [React](https://github.com/facebook/react) - JS Library to create UI's
- [PropTypes](https://github.com/facebook/prop-types) - React prop type checking
- [React Placeholder](https://github.com/buildo/react-placeholder) - Placeholder loadings to improve our UI during HTTP requests
- [Redux](https://github.com/reactjs/redux) - Data state management 
- [Redux persist](https://github.com/rt2zz/redux-persist) - Persist date over reducers
- [Redux saga](https://github.com/redux-saga/redux-saga) - Side effects, use more for interactions between the API's and our reducers

## Requeriments to run
In order to run this project you must have a ```Node``` version installed on your machine. In this project we are using the ```v8.9.2```. We suggest to use ```yarn``` aswell, because it's much faster then ```npm```.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install project dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm coverage`

Show a table with the coverage of the unit tests. It uses [https://github.com/gotwarlost/istanbul](Istanbul) under the hood.<br>

### `npm lint`

Lint the code using the plugins [https://standardjs.com/](Standard javascript Style) and the [https://github.com/yannickcr/eslint-plugin-react](React Esling Plugin). We also have some extensions of the rules, that you can check on ```./eslintrc``` file.<br>

### `npm prettier`

Format the code using the package [https://github.com/prettier/prettier](Prettier).<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Architecture

We're using the structure that ```create-react-app``` provide. All code that matters for us is under the folder ```/src```.


```
src/
  __tests__
    actions
    components
    reducers
  actions
  assets
  components
  config
    constants
    initializers
  containers
  reducers
  sagas
  services
  styles
  index.js
```

This structure was based on ```Rails```, one of the most famous frameworks for web projects. Each folder has files that have only one responsability. IMO, this structure is easier to manage and I feel more confortable with it. There are other people that likes to creates one folder for each screen, and in that folder containing the ```reducers``` and ```actions```, for example.

For state management we're using Redux with some middlewares, like ```redux-saga``` and ```redux-persist```.

For tests, we're using ```Jest``` with ```Enzyme.```.

## Running on heroku
We already have all configurations need to run this application on heroku. You just need to create an app there and set the remote repository using the heroku cli here.
