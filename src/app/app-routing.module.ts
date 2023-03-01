import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumNovoComponent } from './components/forum-novo/forum-novo.component';
import { ForumRemoverComponent } from './components/forum-remover/forum-remover.component';
import { ForumComponent } from './components/forum/forum.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "forum", component: ForumComponent },
  { path: "forum/novo", component: ForumNovoComponent },
  { path: "forum/remover/:id", component: ForumRemoverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
