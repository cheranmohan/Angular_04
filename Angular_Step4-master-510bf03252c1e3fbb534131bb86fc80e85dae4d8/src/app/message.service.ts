import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Message} from './message/message';
@Injectable()
export class MessageService {
  constructor(private http: Http) { }
 username:string;
 circle:string;
  private BASE_URL ='http://localhost:8084/api/message/';

  getUsers(){
  return this.http.get(this.BASE_URL);
  }

  getMessageFromUser(username:any){
    this.username=username;
    return this.http.get(this.BASE_URL+ 'getMessageByUser/'+username+'/'+2)
  }
  getMessageByCircle(circle){
    this.circle=circle;
    return this.http.get(this.BASE_URL+ 'getMessageByCircle/'+circle+'/2')
  }
}
