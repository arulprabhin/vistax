# MistNet UI Version 2 in React

This is the micro front-end boilerplate for **misnet**. It's using [nx](https://nx.dev/) to run the multiple micro front-end apps simultaneously.

**spa** is the host app to run micro front-end apps and **dashboard** is the sample micro front-end app.
**spa** is running at 3000 port and **dashboard** is running at 3001 port.

## Installation

In the root directory, you should run the following command to install packages for all MFE apps.

    ```sh
    yarn install-packages
    ```

## Run the project

If you run `yarn start` in the root directory, it will run the application.
If you'd like to run the micro front-end apps individually, then go into the micro front-end app directory and run `yarn start`.

## Build production

If you run `yarn build` in the root directory, it will generate all production build files for each MFE app.
