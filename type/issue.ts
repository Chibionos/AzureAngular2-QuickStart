import 'rxjs/add/operator/map';

export class Issue {
    html_url : string;
    title: string;
    body: string;
    
    constructor(html_url : string, title : string, body: string) {
        this.html_url = html_url;
        this.title = title;
        this.body = body;
    }
}