import { Repository } from '../interfaces/repository';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../app.constant';
import {map} from 'rxjs/operators';
@Injectable()
export class GitHubService {
  constructor(private http:HttpClient) { }

  getRepos(){
    return this.http.get(AppConstant.API_GITHUB).pipe(map((resp:[])=>resp.map(obj=>{
        return {
          name:obj['name'],
          url:obj['html_url'],
          language:obj['language'],
          pushed_at:obj['pushed_at'],
          description:obj['description']
        }
      })
    ));
  }
}

