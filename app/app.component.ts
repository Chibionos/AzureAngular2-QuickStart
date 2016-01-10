import {Component, OnInit} from 'angular2/core';
import {Issue} from './../type/issue';
import {IssueCard} from './issue-card/issue-card';
import {IssueService} from './issueservice';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template:`
    <h1>Git Issues</h1>
    <div class="list-group" *ngFor="#issue of issues">
        <issue-card [issue]="issue"></issue-card>
    <div class="list-group">
  `,
  styles:[`
  `],
  directives: [IssueCard],
  providers: [IssueService]
})
export class AppComponent implements OnInit {
  
  public issues: Issue[];

  constructor(private issueService : IssueService) { }

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues:any[]) => {
          this.issues = issues;
        });;
  }
}
