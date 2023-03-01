import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forum } from '../classes/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:5168/api/forum";

  public getListaForuns() : Observable<Forum[]> {
    return this.http.get<Forum[]>(this.url);
  }

  public getForum(id: number) : Observable<Forum> {
    const getUrl = `${this.url}/${id}`;
    return this.http.get<Forum>(getUrl);
  }

  public postForum(forum: Forum) : Observable<Forum> {
    return this.http.post<Forum>(this.url, forum);
  }

  public deleteForum(id: number) : Observable<Forum> {
    const deleteUrl = `${this.url}/${id}`;
    return this.http.delete<Forum>(deleteUrl);
  }
}
