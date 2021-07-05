import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  getUsers() : Observable<any> {
    return  this.http.get("http://localhost:3000/posts");
  }

  postUsers(body :any) : Observable <any>{
    return this.http.post("http://localhost:3000/posts" , body);
  }

  searchUsers(id :any) :Observable <any> {
     return this.http.get("http://localhost:3000/posts/" + id )
  }

  DeleteUsers(id :any) :Observable <any> {
    return this.http.delete("http://localhost:3000/posts/" + id)
  }

  updateUsers( id :any , body :any) :Observable <any> {
    return this. http.put("http://localhost:3000/posts/" + id , body)
  }

  // updateUsers(body :any) : Observable <any>{
  //   return this.http.put("http://localhost:3000/posts" , body);
  // }
}
