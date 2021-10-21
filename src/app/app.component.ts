import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'API'; 
  constructor(private usersService: UsersService){}
  ngOnInit(): void {
    this.getPublicRepositories();
  }

  getPublicRepositories(){
    this.usersService.getUsers().subscribe((response:any[]) => {
      console.log(response);
    })
  }
}
