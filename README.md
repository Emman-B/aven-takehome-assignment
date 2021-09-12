# Aven Take-home Exercise Submission

This is my submission for the take-home exercise. I wanted to use this `README.md` file to discuss my development process, any features I implemented, any bugs that could not be addressed, and other topics of interest. I will do my best to keep this brief!

## Installation and Testing/Usage
To install, simply clone the git repository. There are no extra steps in installation (e.g., no node packages, etc).

There are two options to test the web page:
1. Open `index.html` in the browser as a file.
2. Serve `index.html` using the Live Server VS Code extension.

I have tested both methods on Google Chrome, Mozilla Firefox, and Microsoft Edge, all of which worked fine. I prioritized ensuring that the first method works.

## Development Process
I spent a total of about 8 hours, spending approximately 2 hours for researching, experimenting, and studying the design, and 6 hours for development.

I approached this assignment mobile-first, implementing the mobile view prior to working on the desktop view.

## Development Tools
- Visual Studio Code for development
- Live Server (Visual Studio Code extension) for serving the page and refreshing whenever changes are detected
- Mozilla Firefox Developer Tools for testing (e.g., styling, accessibility, responsive views)
- Documentation and other online references, including but not limited to:
  - MDN Web Docs
  - W3Schools
  - Stack Overflow

## Implemented Features
- Mobile and Desktop View: Followed design and implemented both views.
- Mobile and Desktop View: Implemented accessibility in the form of using ARIA labels.
- Mobile View: Created toggleable menu for the navigation only using HTML and CSS.
- Mobile View: Added footer section at the bottom.
- Fake Fetch API: Created a fake backend API that simulates using the Fetch API. Articles are asynchronously "fetched" using Promises.

## Known Bugs and Other Considerations
- <b>Bug</b>: The Aven logo on the top left is supposed to link to the root page (`"/"`), but if you open `index.html` directly in your browser as a file, it will open the root directory of your drive.
  - <b>Reason for failure to fix</b>: This does not happen when the file is served on a web server (hosted at the root `"/"`), which is how it is most likely going to be used in production.
- <b>Consideration</b>: The design requested for the font, "GT America," but there was no free version for this font. I used Helvetica instead.
