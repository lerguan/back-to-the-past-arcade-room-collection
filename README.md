# Back to the Past - Arcade Room Collection
## Introduction
In the year of 1980-2010, the arcade games are super popular around the world. Back then, the arcade room were crowded with People from wide range of ages. Those games in the heavy big box brought a lot of joy to young kids back then. The application helps to bring those memory back and build your favorite game collection in arcade room.

## Start Up the Server
All game data is stored in the db.json file. The data is accessed using a JSON server. Run `json-server --watch db.json` to start the server.

This will create a server storing all of the game data at `http://localhost:3000/:year`. The `:year` is a variable value and can be `1980s`, `1990s` or `2000s`.

A individual game information can be found at `http://localhost:3000/:year/:id`. The `:id` is also a variable value that indicates the path to a specific game.

## Instructions
### Fetch games
When the page loads, the page shows the existing collection of games and the number of titles in the collection from each period of time

### Add new game to collection
On the bottom of the page, there is form where you can input game information and click create button to store the new game information to the collection. Meanwhile, the flyer image of the new added game shows up in its corresponding release date time peroid. The total number of game titles also updates on the top time peroid tab.

### Show specific game information
When move the mouse to a specific game flyer image and click that image, the detail information including title, release date, gameplay image and number of player allowed shows up on the center of the screen while the rest of the page is faded.