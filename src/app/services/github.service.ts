import { Repository } from '../interfaces/repository';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../app.constant';
import {map} from 'rxjs/operators';
@Injectable()
export class GitHubService {
  constructor(private http:HttpClient) { }

  getRepos(){
    return this.http.get(AppConstant.API_GITHUB).pipe(map( (res:any[]) => {
      let repos:Repository[]=[];
      res.forEach(element => {
        repos.push(this.getRepository(element));
      });
      return repos;
    }));
  }
  getRepository(res:any):Repository{
    let data:Repository={
      name:res['name'],
      url:res['html_url'],
      language:res['language'],
      pushed_at:res['pushed_at'],
      description:res['description']
    }
    return data;
  }

}

