import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';

@Injectable()
export class TwitService {
  // private url = 'http://localhost:3000';
  private url = 'https://twit-server.herokuapp.com';
  private socket;

  constructor() {
    this.socket = io(this.url);
    this.socket.on('connect', () => {
      console.log('Connection established');
    });

    this.socket.on('updatedTerm', term => {
      console.log('Streaming tweets for', term);
    });

    this.socket.on('stopped', () => {
      console.log('Stream stopped');
    });
  }

  getTweets() {
    const observable = new Observable(observer => {
      this.socket.on('tweets', tweet => {
        observer.next(tweet);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

  updateTerm(term) {
    this.socket.emit('updateTerm', term);
  }

  stop() {
    this.socket.emit('stop');
  }

}
