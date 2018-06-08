import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class PersonsService {
public url='http://192.168.1.17:9642/api/ninjas';
  constructor(private httpClient:HttpClient) { }
  
 persons(){
   return this.httpClient.get(this.url).map((res:Response)=>{
     console.log(res);
     return res;
   })
 }
 Eachperson(id){
   return this.httpClient.get(this.url+'/'+id).map((res:Response)=>{
    console.log(res);
    return res;
   }
  )
 }
}
