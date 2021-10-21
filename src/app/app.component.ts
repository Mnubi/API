import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'API'; 
  user:any
  searchText:any="mnubi"

  constructor(private usersService: UsersService){}
  ngOnInit(): void {
    this.getPublicRepositories();
  }

  getPublicRepositories(){
    this.usersService.searchUser(this.searchText)

    this.usersService.getUsers().then((data) => {
      console.log(data);

      this.user=data
    })
  }
}
