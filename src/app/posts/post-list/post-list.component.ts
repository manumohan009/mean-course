import { Post } from '../post.model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postSub: Subscription;
  constructor(public postService: PostsService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  // the function getPostUpdateListener() receives the posts emitted by the Subject
  // stores the subscription in a variable to unsubscribe later

  ngOnDestroy() {
    this.postSub.unsubscribe(); // to prevent memory leaks
  }

  // posts = [
  //   { title: 'First Post', content: "This is the first post 's content " },
  //   { title: 'Second Post', content: "This is the second post 's content " },
  //   { title: 'Third Post', content: "This is the third post 's content " }
  // ];
  // @Input() posts: Post[] = [];
}
