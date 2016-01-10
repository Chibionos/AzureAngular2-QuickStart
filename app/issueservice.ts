import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http'
import 'rxjs/add/operator/map';

@Injectable()
export class IssueService {
  
    public http:Http;
   
    constructor(http:Http){
        this.http = http;
    }
    
  getIssues() {
    return this.http.get('https://api.github.com/repos/microsoft/typescript/issues').map((res: Response) => res.json());
  }
}
