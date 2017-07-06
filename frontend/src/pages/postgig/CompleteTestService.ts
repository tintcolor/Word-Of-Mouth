import { AutoCompleteService } from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import { SERVER_URL } from "../../environment/config"


@Injectable()
export class CompleteTestService implements AutoCompleteService {
  labelAttribute = "name";

  constructor(private http: Http) {

  }
  getResults(keyword: string) {
    return this.http.get("https://restcountries.eu/rest/v1/name/"+keyword)
      .map(
      result => {
        console.log(result.json());
        return result.json()
          .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
      });
  }
}