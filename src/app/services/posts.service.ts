import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const key = 'seiji1234';
const url = 'http://reduxblog.herokuapp.com/api';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }
  
  getPosts(): Observable<any>{
   return  this.http.get(`${url}/posts?key=${key}`).map(res => res.json());
  }

  createPost(post): Observable<any>{
    return this.http.post(`${url}/posts?key=${key}`, post).map(res => res.json());
  }

  getSinglePost(id): Observable<any>{
    return  this.http.get(`${url}/posts/${id}?key=${key}`).map(res => res.json());
  }

  deletePost(id){
    return  this.http.delete (`${url}/posts/${id}?key=${key}`).map(res => res.json());
  }

}
