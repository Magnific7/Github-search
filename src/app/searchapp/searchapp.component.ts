import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-searchapp',
  templateUrl: './searchapp.component.html',
  styleUrls: ['./searchapp.component.css']
})
export class SearchappComponent implements OnInit {

  addUser(newUser:string){
    interface ApiResponse1 {
      avatar_url: any;
      login: string;
      followers: number;
      following: number;
      public_repos: number;
    }
    this.http.get<ApiResponse1>("https://api.github.com/users/"+newUser+"?access_token="+(environment.myApi)).subscribe(data => {
      this.user = new User(data.avatar_url, data.login, data.followers, data.following, data.public_repos)
    })
    // interface ApiResponse2 {
    //   name:

    // }

    
  }

  user:User;

  constructor(
    private http:HttpClient,) { }

  ngOnInit() { }

}