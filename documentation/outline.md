# Summary
This document will outline the general flow of what a typical user would expect when navigating onto the page. Along with technologies that we will be using and an ideal timeline of what to expect.

# Landing Page
Upon navigating to the site, there will be a list of available games and a button to create a new room. Clicking join on a game lobby will lead to the waiting room page of that game. Clicking create a new room will open a modal where the user will decide a room name and an optional password, after which they click create room and will be navigated into the waiting room.

# Waiting Room
The waiting room will have a list of players in the current lobby, a start game button, a button to change username, and a message window to allow players to message each other. Players who navigated to this page without a username will be prompted to enter a username they wish to use. This username is not stored and is used purely for the current session.

# Game Page
This will be the page where the game is played, updates will be delivered via websockets to each connected client. Any HTML elements needed in the page are delivered from the backend.

# Technologies
- Express
- Express-Session
- SocketIO
- TailwindCSS
- EJS
- Events (NodeJS)
- File System (NodeJS)

# Timeline
June 2024 - Programming (frontend controls and backend game handler)

July 2024 - Programming and Debugging (frontend animations, UI polish, and debugging)
