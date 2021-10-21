import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http' ;
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

getUsers(): Observable<any[]> {
  // let param = new HttpParams()
  // param = param.append('username', 'Mnubi');

  return this.httpClient.get<any[]>('https://api.github.com/users/mnubi/repos', {
  //   params:param,
  
  // withCredentials: true
  });

}

}
