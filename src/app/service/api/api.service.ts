import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ResponsePost } from '../../model/reponse.interface';
import {environment} from '../../../environments/environment';
import { NotificationService } from '../notification/notification.service';
import { Post } from 'src/app/model/posts.interface';

export interface ResComp{
  name: Array<Post>,
  statTopic : Map<string,number>
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl : string;

  constructor(private http : HttpClient,private notificationService: NotificationService,) {
    this.baseUrl = environment.apiUrl;
  }

  async getProductsByDate(date : string): Promise<ResComp> {
    let resComp : ResComp = {name:[], statTopic : new Map()};
    return await this.http.get<ResponsePost>(this.baseUrl + environment.queryDatePath + date).toPromise().then((res)=>{
      if(res.status == 200){
        resComp ={
          name : res.response.results,
          statTopic: this.getStatTopic(res.response.results)
        }
        this.notificationService.notification$.next(" Request completed : There are "+resComp.name.length+" products." )
        return resComp
      }else{
        this.notificationService.notification$.next(" Request failed : " + res.response.message)
        return resComp
      }
    }).catch((error)=>{
      this.notificationService.notification$.next(" Request failed ")
      return resComp
    })
  }

  getStatTopic(data : Array<Post>): Map<string,number>{
    let chartData = new Map<string,number>()
    data.forEach((post)=>{
      post.topics.forEach((topic)=>{
        if(chartData.has(topic.name)){
          chartData.set(topic.name,chartData.get(topic.name)! +1) 
        }else{
          chartData.set(topic.name,1)
        }
      })
    })
    return chartData
  }
}
