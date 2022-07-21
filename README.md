# Team Generator

## Description

A command line application using node.js. Allows a user to build an html page populated with cards representing members of a corporate team. To create this application I used node.js, the npm packages inquirer and jest, and the built in fs package. I made use of async and await to handle promises, and learned a lot about synchronicity in javascript.

See this link for a video walkthrough of the application: https://drive.google.com/file/d/15gGOm6g41SsOHeDN8RZlLTqz2vLSIMnC/view

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Install node.js. Then open the index.js file in vscode's integrated terminal and run 'npm i' in the directory where you have the package.json file. 

## Usage

While in the integrated terminal, run 'npm test' to run the test suite. If all the tests pass, then run 'node index.js'. This will start the application. Respond the command line prompts (ids must be numbers). When you have created the cards you wanted, select 'make html' from one of the prompt options, and an index.html file will populate in the /dist folder. Open the file in your browzer to see the output of the application.