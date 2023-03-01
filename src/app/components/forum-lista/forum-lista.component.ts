import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/classes/forum';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-lista',
  templateUrl: './forum-lista.component.html',
  styleUrls: ['./forum-lista.component.css']
})
export class ForumListaComponent implements OnInit {

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.getListaForuns()
    .subscribe(resposta => this.foruns = resposta);
  }

  foruns: Forum[] = [];
  listaColunas: string[] = ['id', 'titulo', 'descricao', 'data', 'responsavel', 'telefone', 'opcao']
}
