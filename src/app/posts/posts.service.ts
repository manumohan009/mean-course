import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// provides this service at root level;
// creates once instance of service for the entire app
// same as declaring in the providers array in app.module.ts
@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]; // copies the items in array to another array
    // return this.posts;
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
