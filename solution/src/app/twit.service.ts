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
    this.socket.on('client connected', () => {
      console.log('Connection established');
    });

    this.socket.on('updatedTerm', term => {
      console.log('Now streaming tweets for ', term);
    })
  }

  updateTerm(term) {
    this.socket.emit('updateTerm', term);
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

  disconnect() {
    
  }



}
