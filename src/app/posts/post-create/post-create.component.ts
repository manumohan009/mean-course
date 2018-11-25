import { Post } from '../post.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(public postService: PostsService) {}

  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
    // this.postCreated.emit(post);
  }
}
