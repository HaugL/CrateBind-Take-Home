# Introduction

This application is a take home project as a part of the interview process for CrateBind.

[Click here for the technical requirements of the app](https://drive.google.com/file/d/19Wnt2COGt1eHJOcNsXEilfaJ2fv_N7a6/view?usp=share_link "Click here for the technical requirements of the app")

[Click here for live version of the app](https://cratebind.lianne.dev "Click here for live version of the app")

## Future Improvements
Without the time contraint of a take home project, here are some improvements I would make:

### Adding Redux State
Since there was only a few pieces of state and a handful of simple components, I felt like Redux was overkill for this project. With more time, more features and more complex state Redux would be a necessary addition.

### Expand from mobile first design to make the page more user friendly for bigger devices
Adding a grid system that collapses would make more data accessible to users on laptops and monitors.

### Making repo item components more interactive
I grabbed very basic information from the individual repos to display on the screen. These components could be significantly expanded depending on what users wanted to see related to popular repos.

### Adding CI/CD
Must have for a real app

## Local Environment Setup

This application runs on node version 18.12. You can use [the n library](https://www.npmjs.com/package/n "the n library") to manage multiple node versions

**Step 1: Install Node 18.2**
> $ npm install -g n
$ n 18.12

**Step 2: Install Node Modules**
> $ npm install

## Development
To run the server locally:
> $ npm start

## Testing
This applicaiton uses the react testing library. From the testing console you have full power to run all or specific tests. Load the testing console by running:

> $ npm test
