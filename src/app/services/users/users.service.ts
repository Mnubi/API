import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http' ;
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url="https://api.github.com/users/"
  apiToken=environment.token
  searchText:string="mnubi"

  constructor(private httpClient: HttpClient) { }

getUsers() {


  return this.httpClient.get<any>(`${this.url}${this.searchText}??access_token=+${this.apiToken}`).toPromise() 

}

searchUser(name:string) {
  this.searchText=name
}

}

