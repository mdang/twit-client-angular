import { Component, OnInit, OnDestroy } from '@angular/core';

import { TwitService } from '../twit.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit, OnDestroy {
  private tweets = [];
  private stream;

  constructor(private twitService: TwitService) { }

  ngOnInit() {
    this.stream = this.twitService.getTweets().subscribe(tweet => {
      this.tweets.unshift(tweet);
    });
  }

  ngOnDestroy() {
    this.stream.unsubscribe();
  }
}
