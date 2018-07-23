import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-render',
  templateUrl: './post-render.component.html'
})
export class PostRenderComponent implements OnInit, OnDestroy {

  constructor( public postService: PostService) {}

  private posts: Post[] ;
  private subscription: Subscription;

  ngOnInit() {
    this.posts = this.postService.getPostList();
    this.postService.postSubjectListener()
      .subscribe((response: Post[]) => {
        this.posts = [...response];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe() ;
  }

}
