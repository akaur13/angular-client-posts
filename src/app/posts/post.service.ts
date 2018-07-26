import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class PostService {
  private postsList: Post[] = [];
  private postListSubject = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPostList() {
    this.http.get<{message: String, posts: Post[] }>('http://localhost:3000/api/posts')
    .subscribe((resp)=>{
      this.postsList = resp.posts;
      this.postListSubject.next([...this.postsList]);
    });
  }

  postSubjectListener() {
    return this.postListSubject.asObservable();
  }

  setPost(post: Post) {
    this.postsList.push(post);
    this.postListSubject.next(this.postsList);
  }

}
