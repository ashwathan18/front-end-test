import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http"; 
import {Observable} from "rxjs/Observable"; 
import "rxjs/Rx";

@Injectable()
export class AnalyticsDataService {

  constructor(private http: Http) { }
  // Get given json
  getJSON(): Observable<any> { 
    return this.http.get("./assets/json/activity-data.json") 
      .map((res:any) => res.json(), (err: any) => console.log(err));
  }

}
