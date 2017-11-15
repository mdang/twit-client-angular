import { Component, OnInit, OnDestroy } from '@angular/core';

import { TwitService } from '../twit.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit, OnDestroy {
  private tweets = [];
  private connection;

  constructor(private twitService: TwitService) { }

  ngOnInit() {
    this.connection = this.twitService.getTweets().subscribe(tweet => {
      console.log('new tweet', tweet);
      this.tweets.unshift(tweet);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
