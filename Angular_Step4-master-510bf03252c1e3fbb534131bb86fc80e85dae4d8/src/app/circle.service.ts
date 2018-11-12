import { Injectable } from '@angular/core';
import {Circle} from './circle/circle';
import {Http} from '@angular/http';
@Injectable()
export class CircleService {

  constructor(private http: Http) { }

  private CIRCLE_SERVICE_BASE_URL ='http://localhost:8082/api/circle';

  getCircles(){
  return this.http.get(this.CIRCLE_SERVICE_BASE_URL);
  }

}
