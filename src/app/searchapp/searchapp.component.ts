import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
// import { environment } from "src/environments/environment";
import { SearchRequestService } from '../search-http/search-request.service';
import { Repository } from '../repository';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-searchapp",
  templateUrl: "./searchapp.component.html",
  styleUrls: ["./searchapp.component.css"]
})
export class SearchappComponent implements OnInit {
  searchRequestService:SearchRequestService;
  User: User;
  Repository: Repository[]; 


  // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }{
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
 // addUser(newUser: string) {
  //   interface ApiResponse1 {
  //     avatar_url: any;
  //     login: string;
  //     followers: number;
  //     following: number;
  //     public_repos: number;
  //   }
  //   this.http
  //     .get<ApiResponse1>(
  //       "https://api.github.com/users/" +
  //         newUser +
  //         "?access_token=" +
  //         environment.myApi
  //     )
  //     .subscribe(data => {
  //       this.user = new User(
  //         data.avatar_url,
  //         data.login,
  //         data.followers,
  //         data.following,
  //         data.public_repos
  //       );
  //       // console.log(data);
  //     });
  //   // console.log(this.user);
  //   // interface ApiResponse2 {
  //   //   name:

  //   // }

    
  // }
  //   // }

    
  // }

  constructor(private searchService:SearchRequestService, private http: HttpClient,private router: ActivatedRoute) {}

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get("id");
    this.searchService.addUser(id);
    this.searchService.addRepo(id);

    this.User = this.searchService.Use;
    this.Repository = this.searchService.Rep;
  }
}
