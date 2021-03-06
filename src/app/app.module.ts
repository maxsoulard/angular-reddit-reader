import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';

import { ApiConstantes } from './api/api.constantes';

import { SubredditService } from './api/subreddit.service';
import { WindowService } from './api/window.service';
import { DomParserService } from './api/domparser.service';
import { PostService } from './api/post.service';
import { SearchService } from './api/search.service';
import { EmbedService } from './api/embed.service';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { PostComponent } from './post/post.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TrendingSubredditsComponent } from './trending-subreddits/trending-subreddits.component';
import { SubredditContentComponent } from './subreddit-content/subreddit-content.component';
import { CommentComponent } from './comment/comment.component';
import { SearchComponent } from './search/search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { CommentsComponent } from './comments/comments.component';
import { ImageModalComponent } from './image-modal/image-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PostComponent,
    DetailedPostComponent,
    LeftMenuComponent,
    TrendingSubredditsComponent,
    SubredditContentComponent,
    CommentComponent,
    SearchComponent,
    SearchHistoryComponent,
    CommentsComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SubredditService,
    WindowService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DomParserService,
    ApiConstantes,
    PostService,
    SearchService,
    EmbedService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
