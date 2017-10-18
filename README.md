### Getting Started

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/AdinoyiSadiq/back-office-tool.git
> cd back-office-tool
> npm install
> sudo apt-get install sqlite3 libsqlite3-dev
> sudo apt-get install python-tornado
> python server.py
```
After 'python server.py', open another terminal window and type in:
```
> npm start
```

After 'npm start', open a browser and type in "localhost:8080"

Username is Adinoyi and the password is 1234

### How it works

The back-office-tool application uses two handlers for get and post requests using tornado.
These handlers are used to update the state on the client-side.

The app simply modifies the state on the client side and sends the state to the back-end when changes are made.
The back-end then persists the state, limiting the need for multiple requests.

