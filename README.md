# Instructions

1. Make a copy of default.env and rename it to .env
`mv default.env .env` if you use UNIX based system.
2. Install needed libs `npm install`
3. Run `npm start` to build the project and view it in the browser.

# Project rundown

React - react is react even in Siberia.
Bootstrap + Reactstrap - basic frontend elements.
Redux - holds state of the program.
Redux-Thunk - Redux middleware for handling async actions within the project.
Axios - my preffered library for making ajax calls. It has some advantages over fetch,
yet none were shown in this project (for example, request cancelation).
Every react component includes a basic "smoke" test. I try to add these in every React project I make,
to save the hassle of finding out, that some component(s) isn't rendered, when project is built.

P.S. - I've found a browser anomaly after finishing the project, can you see it too? :)