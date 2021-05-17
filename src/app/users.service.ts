import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  userEnquiry(data:any)
  {
    console.log(data);
    return this.http.post<string>("http://localhost:3000/enquiry", data);
  }
}
