import {Component} from 'angular2/core';
import {Issue} from './../../type/issue';

@Component({
  selector: 'issue-card',
  template: `
  <a href="{{issue.html_url}}" class="list-group-item">
    <h3 class="list-group-item-heading">{{issue.title}}</h3>
    <h4 class="list-group-item-heading">State : {{issue.state}}</h4>
    <p class="list-group-item-text">
        {{issue.body}}
     </p>
  </a>
  `,
  inputs: ['issue']
})
export class IssueCard {
  public issue: Issue;
}
