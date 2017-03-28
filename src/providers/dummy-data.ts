import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DummyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DummyData {

  posts: String[] = [
    "2017-03-22T23:55:42.477Z",
    "2017-03-23T23:55:42.477Z",
    "2017-03-24T23:55:42.477Z",
    "2017-03-25T23:55:42.477Z",
    "2017-03-26T23:55:42.477Z",
    "2017-03-27T23:55:42.477Z"
  ]
  drafts: String[] = [
    "2017-03-28T23:55:42.477Z",
    "2017-03-29T23:55:42.477Z",
    "2017-03-30T23:55:42.477Z",
    "2017-03-31T23:55:42.477Z"
  ]
  
  constructor(public http: Http) {
    console.log('Hello DummyData Provider');
  }
  
  getPosts() {
    this.posts;
  }
  getDrafts() {
    return this.drafts;
  }
}
