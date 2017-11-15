# Twit Client (Angular)

Real-time application for streaming tweets using [SocketIO](https://socket.io/) and Angular. 

## Prerequisites

Go through the Twit Server lesson and set up a local server that the client can connect to. 

Alternatively, you can connect to the [hosted version](https://twit-server.herokuapp.com/) of Twit Server. 

## Starter Code

```
$ cd starter && npm i
```

The starter code contains the base HTML and styling from the Twit Server lesson. 

## Set up Components 

```
$ ng g c tweets
```

```
$ ng g c search
```

Move the HTML from app.component.html to the correct component HTML files. Add in the component tags for those components.

Your **app.component.html** should look like this now: 

```html
<!-- app.component.html -->
<div class="container">
  <h1>Twit Client</h1>
  <app-search></app-search>
  <app-tweets></app-tweets>
</div>
```

You might notice the styling is incorrect now because we moved the HTML out of the app conponent. Move the CSS from **app.component.css** to the correct locations in the components.

## Set up the Service

We'll want to set up a service to encapsulate the socket connection and share data between `app-search` and `app-tweets`. 

```
$ ng g s twit
```

- Add the service to **app.module.ts** as a provider so our components can utilize it.
- Add the service to both of our components in the corresponding ***.component.ts** files  
- Don't forget to inject it into our component constructors also

## Set up SocketIO

```
$ npm i socket.io --save
```

We'll need to import it to the top of our service now. 

```js
// twit.service.ts
import * as io from 'socket.io-client';
```

Let's add two instance variables, one for the server URL and for the socket connection itself. 

```js
// twit.service.ts
private url = 'http://localhost:3000';
private socket;
```

```js
// twit.service.ts
  constructor() {
    this.socket = io(this.url);
    this.socket.on('client connected', () => {
      console.log('Connection established');
    });
  }
```

## Post the Search Term

```js
// twit.service.ts
  updateTerm(term) {
    this.socket.emit('updateTerm', term);
  }
```

```

```

## Create an Observable 

We'll want to create an obervable that components can subscribe to, but keep in mind we need to not only be able to subscribe to the observable but push updates to it as well. For this reason we'll need to use subjects. 

```js
// twit.service.ts
import { Observable } from 'rxjs/Observable';
```



