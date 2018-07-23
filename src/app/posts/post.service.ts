import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {
  private postsList: Post[] = [];
  private postListSubject = new Subject<Post[]>();

  getPostList() {
    return [...this.postsList];
  }

  postSubjectListener() {
    return this.postListSubject.asObservable();
  }

  setPost(post: Post) {
    this.postsList.push(post);
    this.postListSubject.next(this.postsList);
  }

}
