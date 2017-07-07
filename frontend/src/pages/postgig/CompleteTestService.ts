import { AutoCompleteService } from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import { SERVER_URL } from "../../environment/config"


@Injectable()
export class CompleteTestService implements AutoCompleteService {
  labelAttribute = "job";

  constructor(private http: Http) {

  }
  getResults(keyword: string) {
    return this.http.get(SERVER_URL + "job/" + keyword)
      .map(
      result => {
        return result.json()
          .filter(item => item.job.toLowerCase().startsWith(keyword.toLowerCase()) )
      });
  }
}