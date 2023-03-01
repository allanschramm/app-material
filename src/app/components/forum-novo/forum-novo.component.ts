import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Forum } from 'src/app/classes/forum';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-novo',
  templateUrl: './forum-novo.component.html',
  styleUrls: ['./forum-novo.component.css']
})
export class ForumNovoComponent {

  constructor(private forumService: ForumService, private router:Router) { }

  forum: Forum = new Forum();

  incluirForum() : void {
    this.forumService.postForum(this.forum)
    .subscribe(() => {
      this.router.navigate(['/forum']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/forum']);
  }
}
