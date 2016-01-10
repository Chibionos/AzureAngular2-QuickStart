import {Component} from 'angular2/core';
import {Issue} from './../../type/issue';

@Component({
  selector: 'issue-card',
  template: `
    <div>
      <a href="{{issue.html_url}}">{{issue.title}}</a>
      <p>{{issue.body}}</p>
    </div>
  `,
  inputs: ['issue']
})
export class IssueCard {
  public issue: Issue;
}
