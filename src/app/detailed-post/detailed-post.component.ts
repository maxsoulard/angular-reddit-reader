import { Component, OnInit, Input } from '@angular/core';
import { WindowService } from '../api/window.service';
import { DomParserService } from '../api/domparser.service';
import { PostService } from '../api/post.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Post } from '../api/model/post';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EmbedService } from '../api/embed.service';

@Component({
  selector: 'ms-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css'],
  animations: [
    trigger(
      'showPostAnimation', [
        state('inactive', style({
          opacity: 0
        })),
        state('active',   style({
          opacity: 1
        })),
        transition('inactive => active', animate('.2s', style({ opacity: 1 }))),
        transition('* => inactive', animate('.2s', style({ opacity: 0 })))
      ]
    )
  ]
})
export class DetailedPostComponent implements OnInit {
  @Input() post: Post;
  @Input() state: string;
  isModalActive: boolean;
  contentToDisplay: SafeHtml;
  isComponentActive: boolean;
  gifUrl: string;

  constructor(private domParserService: DomParserService, 
    private windowService: WindowService, 
    private postService: PostService, 
    private embedService: EmbedService) { }

  ngOnInit() {
    const content: SafeHtml | string =  this.embedService.getSafeInnerHtml(this.post);
    this.contentToDisplay = typeof content !== 'string' ? content : null;
    this.gifUrl = typeof content === 'string' ? content : null;
    this.post.data.type = this.postService.getTypeOfPost(this.post);
  }

  goTo(url) {
      this.windowService.goTo(url);
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  onImageModalClosed() {
    this.toggleModal();
  }
}
