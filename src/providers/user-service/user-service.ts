import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User} from '../../app/user';
import { Login } from '../../app/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserServiceProvider {

  private usersUrl: string = 'http://localhost:3000/users';

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  
  /* *********** GET *********** */

  /* *********** POST *********** */
  login(log: Login): Observable<User> {
    const url = `${this.usersUrl}/login`
    return this.http.post<User>(url, log, httpOptions);
  }

  /* *********** PUT *********** */

  /* *********** DELETE *********** */

}
