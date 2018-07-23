import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

  constructor(public postService: PostService) {}

  onAddPost(postForm: NgForm) {
    if ( postForm.invalid ) {
      return;
    }
    console.log('post added');
    const post: Post = {title: postForm.value.title, content: postForm.value.content};
    this.postService.setPost(post);
  }
}
