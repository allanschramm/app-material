import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from 'src/app/classes/forum';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-remover',
  templateUrl: './forum-remover.component.html',
  styleUrls: ['./forum-remover.component.css']
})
export class ForumRemoverComponent implements OnInit{
  
  constructor(
    private forumService: ForumService,
    private router: Router,
    private route: ActivatedRoute) { }

    id!: string;
    forum!: Forum;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.forumService.getForum(parseInt(this.id))
      .subscribe(res => this.forum = res);
  }

  fechar() : void {
    this.router.navigate(['/forum']);
  }

  remover() : void {
    this.forumService.deleteForum(parseInt(this.id))
    .subscribe(() => this.fechar());
  }

}
