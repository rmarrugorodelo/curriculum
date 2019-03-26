import { Repository } from './../../interfaces/repository';
import { GitHubService } from '../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories:Repository[];
  constructor(private service:GitHubService) { 
    this.getRepos();
  }

  ngOnInit() {
  }

  getRepos(){
    this.service.getRepos().subscribe(resp=>{
      this.repositories=resp;
    });
  }
}
