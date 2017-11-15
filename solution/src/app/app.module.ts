import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import { SearchComponent } from './search/search.component';
import { TweetComponent } from './tweet/tweet.component';

import { TwitService } from './twit.service';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    SearchComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TwitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
