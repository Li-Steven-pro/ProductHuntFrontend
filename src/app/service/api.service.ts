import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ResponsePost } from '../model/reponse.interface';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl : string;

  constructor(private http : HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getProductsByDate(date : string){
    return this.http.get<ResponsePost>(this.baseUrl + environment.queryDatePath + date).toPromise();
  }
}
